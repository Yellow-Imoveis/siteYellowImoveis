import { Helmet } from "react-helmet";

const FacebookTags = ({ title, tags }) => {
  return (
    <>
      {tags && tags.length > 0 && (
        <Helmet>
          <title>{`Yellow Imóveis - ${title}`}</title>

          {tags.map((tag, index) => (
            <meta property={tag.property} content={tag.content} key={index} />
          ))}
        </Helmet>
      )}
    </>
  );

};

export default FacebookTags;