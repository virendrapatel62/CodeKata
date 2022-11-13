import React, { Fragment } from "react";

export default function MarvelHeroCard({ character }) {
  const { name, description, id, thumbnailUrl } = character;
  return (
    <Fragment>
      <img src={thumbnailUrl} class="img-fluid" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p
          class="card-text"
          style={{
            minHeight: 100,
            maxHeight: 100,
            overflow: "hidden",
          }}
          title={description}
        >
          {description}
        </p>
        <a href="#" class="btn btn-success">
          Show More
        </a>
      </div>
    </Fragment>
  );
}
