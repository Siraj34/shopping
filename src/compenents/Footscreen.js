import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'

export default function Footer() {
  return (
    <div className=" flex md:justify-center bg-black text-white">
      <div>
        <div className="flex flex-col justify-center">
          <div className="m-3">
            <span className="m-3 p-3">
              Get connected with us on social networks:
            </span>
          </div>
          <div className="sm:grid sm:grid-cols-3 ">
            <div className="flex flex-col  md:m-3 md:p-3">
              <h6 className="m-2">Social</h6>

              <a href="#!" className="m-2">
                Contact
              </a>

              <a href="#!" className="m-2">
                About
              </a>

              <a href="#!" className="m-2">
                Service
              </a>

              <a href="#!" className="m-2">
                New
              </a>
            </div>
            <div className=" flex flex-col justify-center m-3 p-3">
              <h6 className="m-2">Useful </h6>

              <a href="#!" className="m-2">
                Header
              </a>

              <a href="#!" className="m-2">
                Search
              </a>

              <a href="#!" className="m-2">
                All this !
              </a>

              <p>
                <a href="#!" className="m-2">
                  Help
                </a>
              </p>
            </div>
            <div className=" ">
              <h6 className="m-2">Contact</h6>
              <i className="m-2">Gotan, D9 50012, SW</i>
              <i className="m-2"> gmail@example.com</i>
              <div className="m-3 p-2"> 0046700000000</div>
            </div>
          </div>
        </div>

        <div
          className="text-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            @Habesha-forum.com
          </a>
        </div>
      </div>
    </div>
  )
}
