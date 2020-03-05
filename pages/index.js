import ProfileContent from "../components/ProfileContent";
import Head from "next/head";

const index = () => (
  <>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <title>Santiago Prieto</title>
    </Head>
    <ProfileContent></ProfileContent>

    <style jsx global>{`
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
    `}</style>
    <style jsx>{`
      :global(body) {
        background-color: #000f17;
        font-family: "Roboto";
      }

      :global(.section) {
        min-height: 100vh;
      }

      :global(.title) {
        font-size: 2.5rem;
        text-align: center;
        color: white;
      }
      
      }
    `}</style>
    <style jsx>{`
      @media screen and (max-width: 768px) {
        :global(.title) {
          font-size: 2rem;
        }
      }
      @media screen and (max-width: 480px) {
        :global(.title) {
          font-size: 1.5rem;
        }
      }
    `}</style>
  </>
);

export default index;
