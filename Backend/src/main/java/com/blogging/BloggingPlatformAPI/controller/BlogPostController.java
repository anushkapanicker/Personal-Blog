package com.blogging.BloggingPlatformAPI.controller;

import com.blogging.BloggingPlatformAPI.model.BlogPost;
import com.blogging.BloggingPlatformAPI.service.BlogPostService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class BlogPostController {

    private final BlogPostService blogPostService;

    public BlogPostController(BlogPostService blogPostService){
        this.blogPostService = blogPostService;
    }

    @PostMapping
    public ResponseEntity<?> createPost(@Valid @RequestBody BlogPost post){
        BlogPost created = blogPostService.createPost(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping
    public ResponseEntity<List<BlogPost>> getAllPosts(@RequestParam(required = false) String term){
        return ResponseEntity.ok(blogPostService.getAllPosts(term));
    }

    @GetMapping("/{id}")
    public ResponseEntity<BlogPost> getPostById(@PathVariable Long id) {
        return blogPostService.getPostById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePost(@PathVariable Long id, @RequestBody BlogPost updatedPost){
        BlogPost updated = blogPostService.updatePost(id, updatedPost);
        if(updated == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post not found");
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id){
        boolean deleted = blogPostService.deletePost(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
