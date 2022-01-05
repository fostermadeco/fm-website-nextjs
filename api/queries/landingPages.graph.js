const GET_LANDING_PAGES = `{
  pageLandingCollection {
    items {
      name
      pageIntro {
        overline
        headerText
        image {
          media {
            url
          }
        }
      }
      contentfulMetadata {
        tags {
          name
        }
      }
      slideshow {
        overline
      }
    }
  }
}`;

export default GET_LANDING_PAGES;