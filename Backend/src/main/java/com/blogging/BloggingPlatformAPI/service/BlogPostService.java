package com.blogging.BloggingPlatformAPI.service;

import com.blogging.BloggingPlatformAPI.model.BlogPost;
import com.blogging.BloggingPlatformAPI.repository.BlogPostRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogPostService {

    private final BlogPostRepository blogPostRepository;

    public BlogPostService(BlogPostRepository blogPostRepository){
        this.blogPostRepository = blogPostRepository;
    }

    public BlogPost createPost(BlogPost post){
        return blogPostRepository.save(post);
    }

    public BlogPost updatePost(Long id, BlogPost updatedPost){
        return blogPostRepository.findById(id)
                .map(post -> {
                    post.setTitle(updatedPost.getTitle());
                    post.setContent(updatedPost.getContent());
                    post.setCategory(updatedPost.getCategory());
                    post.setTags(updatedPost.getTags());
                    return blogPostRepository.save(post);
                })
                .orElse(null);
    }

    public List<BlogPost> getAllPosts(String term){
        if(term != null && !term.isBlank()){
            return blogPostRepository.searchByTerm(term);
        }
        return blogPostRepository.findAll();
    }

    public Optional<BlogPost> getPostById(Long id){
        return blogPostRepository.findById(id);
    }

    public boolean deletePost(Long id){
        return blogPostRepository.findById(id)
                .map(post -> {
                    blogPostRepository.delete(post);
                    return true;
                })
                .orElse(false);
    }
}
