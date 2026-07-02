package com.eduardonowa.aem.models;

import org.junit.jupiter.api.Test;

import java.lang.reflect.Field;

import static org.junit.jupiter.api.Assertions.*;

class HeroBannerModelTest {

    @Test
    void getTitle_returnsDefaultWhenBlank() throws Exception {
        HeroBannerModel model = new HeroBannerModel();
        setField(model, "title", "  ");
        assertEquals("Default title", model.getTitle());
    }

    @Test
    void getTitle_returnsAuthorValueWhenPresent() throws Exception {
        HeroBannerModel model = new HeroBannerModel();
        setField(model, "title", "Welcome");
        assertEquals("Welcome", model.getTitle());
    }

    @Test
    void isHasCta_returnsTrueWhenLabelAndLinkPresent() throws Exception {
        HeroBannerModel model = new HeroBannerModel();
        setField(model, "ctaLabel", "Learn more");
        setField(model, "ctaLink", "/content/page");
        assertTrue(model.isHasCta());
    }

    @Test
    void isHasCta_returnsFalseWhenLinkMissing() throws Exception {
        HeroBannerModel model = new HeroBannerModel();
        setField(model, "ctaLabel", "Learn more");
        setField(model, "ctaLink", " ");
        assertFalse(model.isHasCta());
    }

    @Test
    void getSubtitle_returnsNullWhenUnset() {
        HeroBannerModel model = new HeroBannerModel();
        assertNull(model.getSubtitle());
    }

    private static void setField(Object target, String name, String value) throws Exception {
        Field field = target.getClass().getDeclaredField(name);
        field.setAccessible(true);
        field.set(target, value);
    }
}
