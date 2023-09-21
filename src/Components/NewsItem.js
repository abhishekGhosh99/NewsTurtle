import React from "react";

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, published, source } =
    props;
  return (
    <>
      <div className="my-3">
        <div className="card">
          <img
            style={{ height: "200px" }}
            src={
              !imageUrl
                ? "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2023/08/artificial-intelligence-freepik-1692264864.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                Source : {source}
              </span>
            </h5>
            <p className="card-text">
              {!description
                ? "Description is not provided by the author, click read more to get full information"
                : description}
              ...
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(published).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
