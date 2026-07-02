package com.eduardonowa.aem.models;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class HeroBannerModel {

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String subtitle;

    @ValueMapValue
    private String ctaLabel;

    @ValueMapValue
    private String ctaLink;

    public String getTitle() {
        return StringUtils.defaultIfBlank(title, "Default title");
    }

    public String getSubtitle() {
        return subtitle;
    }

    public String getCtaLabel() {
        return ctaLabel;
    }

    public String getCtaLink() {
        return ctaLink;
    }

    public boolean isHasCta() {
        return StringUtils.isNotBlank(ctaLabel) && StringUtils.isNotBlank(ctaLink);
    }
}
