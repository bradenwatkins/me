import React from "react"
import Helmet from "react-helmet"

import useScript from "../hooks/useScript"
import useInlineScript from "../hooks/useInlineScript"
import raffleScript from "../constants/raffleScript"
import "./raffle.css"

const Raffle = () => {
  useScript({
    url: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    integrity:
      "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
  })
  useScript({
    url:
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
    integrity:
      "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
  })
  useScript({
    url:
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
    integrity:
      "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy",
  })
  useInlineScript(raffleScript)

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        ></link>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <div id="app-container">
            <div id="container"> 
              <div class="navbar navbar-dark bg-dark text-light">
                <h1 class="panel-title">Random Name Picker</h1>
                <button
                  class="btn btn-secondary"
                  id="button"
                  onClick="runGenerator()"
                >
                  Go
                </button>
              </div>
              <div class="panel-body">
                <div class="info-group">
                  <textarea id="name-input" rows="20"></textarea>
                </div>
                <div id="name-container"></div>
              </div>
            </div>
          </div>
          `,
        }}
      />
    </>
  )
}

export default Raffle
