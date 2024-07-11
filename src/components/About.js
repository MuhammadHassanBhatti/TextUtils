import React from "react";

export default function About() {
  return (
    <div className="container my-4">
      <h2>About us :</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              TextUtils
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Text Transformer is a versatile application designed to enhance
              your text management tasks effortlessly. With a suite of powerful
              features, Text Transformer allows you to manipulate and manage
              text in various ways to suit your needs. Whether you need to
              quickly capitalize, lowercase, or copy text, Text Transformer
              streamlines these processes with ease.
              <br />
              <strong>Features:</strong>
              <br />
              <strong> Capitalize Text: </strong>
              Instantly convert any text to capitalize the first letter of each
              word, making it perfect for titles and headings.
              <br />
              <strong> Lowercase Text: </strong>
              Convert all characters in the text to lowercase, ensuring
              consistency and readability.
              <br />
              <strong> Copy Text: </strong>
              Quickly copy any text to your clipboard with a single click,
              making it easy to paste wherever needed.
              <br />
              <strong> Uppercase Text: </strong>
              Convert all characters in the text to uppercase, ideal for
              emphasis and headings.
              <br />
              <strong> Trim Text: </strong>
              Remove any leading or trailing whitespace from the text for clean
              and neat formatting.
              <br />
              <strong> Count Characters and Words: </strong>
              Instantly get the character and word count of the text, helpful
              for meeting specific length requirements.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Shutterstock
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong> Description: </strong>Shutterstock is a well-known
              platform that offers a vast collection of stock photos, vectors,
              illustrations, videos, and music tracks. It operates on a paid
              model, providing high-quality and exclusive content for commercial
              use.<strong> Website: </strong>
              Shutterstock
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Search Bar
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The Smart Search Bar is an intuitive and powerful feature designed
              to streamline your search experience. This dynamic tool allows you
              to quickly find and filter results based on your input, ensuring
              that you get the most relevant information in the shortest amount
              of time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
