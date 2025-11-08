package com.blogging.BloggingPlatformAPI.repository;

import com.blogging.BloggingPlatformAPI.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {

    // Wildcard search across title, content, and category
    @Query("SELECT p FROM BlogPost p WHERE " +
            "LOWER(p.title) LIKE LOWER(CONCAT('%', :term, '%')) OR " +
            "LOWER(p.content) LIKE LOWER(CONCAT('%', :term, '%')) OR " +
            "LOWER(p.category) LIKE LOWER(CONCAT('%', :term, '%'))")
    List<BlogPost> searchByTerm(@Param("term") String term);

}
