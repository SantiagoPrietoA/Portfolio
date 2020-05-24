const GoWebButton = ({ url }) => (
  <div>
    <a href={url} target="_blank" className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Go to web</span>
    </a>

    <style jsx>{`
      * {
        box-sizing: border-box;
        text-align: center;
        margin-top: 1em;
      }
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        font-size: 1rem;
        line-height: 1.5;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        min-height: 100vh;
        background: #f3f8fa;
      }
      a {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
      }
      a.learn-more {
        width: 12rem;
        height: auto;
      }
      a.learn-more .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
        background: #282936;
        border-radius: 1.625rem;
      }
      a.learn-more .circle .icon {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #fff;
      }
      a.learn-more .circle .icon.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        left: 0.625rem;
        width: 1.125rem;
        height: 0.125rem;
        background: none;
      }
      a.learn-more .circle .icon.arrow::before {
        position: absolute;
        content: "";
        top: -0.25rem;
        right: 0.0625rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.125rem solid #fff;
        border-right: 0.125rem solid #fff;
        transform: rotate(45deg);
      }
      a.learn-more .button-text {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.75rem 0;
        margin: 0 0 0 1.85rem;
        color: #b2b2b5;
        font-weight: 700;
        line-height: 1.6;
        text-align: center;
        text-transform: uppercase;
      }
      a:hover .circle {
        width: 100%;
      }
      a:hover .circle .icon.arrow {
        background: #fff;
        transform: translate(1rem, 0);
      }
      a:hover .button-text {
        color: #fff;
      }
    `}</style>
  </div>
);

export default GoWebButton;
