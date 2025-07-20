import { Copy, Link, LogIn, QrCode } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-section-home flex flex-col h-[100vh] w-[100vw]">
      <div className="header w-[100%] h-[15vh] flex items-center">
        <div className="left-side w-[50%] items-center">
          <h1 className="color-radial">Linkly</h1>
        </div>
        <div className="right-side w-[50%] flex items-end flex-row-reverse gap-[8px]">
          {/* <button className="bg-[#144EE3] text-white h-[6vh] w-[10vw] flex justify-center items-center rounded-3xl cursor-pointer text-[12px] font-[600]">
            Register Now
          </button>
          <button className="bg-[#353C4A] text-white text-[12px] h-[6vh] w-[10vw] flex items-center justify-center rounded-3xl cursor-pointer gap-[8px]">
            Login <LogIn size={"18px"} className="mt-[.8vh]"/>
          </button> */}
        </div>
      </div>
       <div className="main-section w-[100%] h-[90vh] flex flex-col items-center">
          <div className="section-main-middle w-[60%] h-[30%] items-center flex flex-col justify-center">
              <h1 className="h-main ">Shorten Your Loooong Links :)</h1>
              <p className="text-[1vw] text-center mt-[2%] text-[#C9CED6] w-[60%]">Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
          </div>
          <div className="section-main-middle w-[60%] h-[10%] flex justify-center">
              <div className="input-box flex items-center justify-center h-[8vh] text-white bg-[#353C4A] w-[60%] rounded-3xl">
                <Link color="#C9CED6" size={"1.5vw"}/>
                <input type="text" className="w-[60%] h-[100%] border-0 outline-0 px-[4%] text-[#C9CED6]"/>
                <button className="w-[30%] bg-blue-600 h-[80%] rounded-4xl cursor-pointer font-[1vw]">Shorten Now!</button>
              </div>
          </div>
          <div className="section-link-tabl w-[100%] h-[50vh] flex justify-center mt-[6vh]">
              <div className="table w-[90%] h-[100%] overflow-y-scroll hide-scrollbar">
                  <div className="table-head w-full h-[10vh] bg-[#353C4A] rounded-cutom flex items-center justify-around px-[2%]">
                      <div className="col-30 w-[29.5%]">
                        <p>Short Link</p>
                      </div>
                      <div className="col-30 w-[29.5%]">
                        <p>Original Link</p>
                      </div>
                      <div className="col-10 w-[9.5%]">
                        <p>QR Code</p>
                      </div>
                      <div className="col-10 w-[9.5%]">
                        <p>Clicks</p>
                      </div>
                      <div className="col-10 w-[9.5%]">
                        <p>Status</p>
                      </div>
                      <div className="col-10 w-[9.5%]">
                        <p>Date</p>
                      </div>
                  </div>
                  <div className="table-head w-full h-[10vh] custom-bg flex items-center justify-around px-[2%] mt-2">
                      <div className="col-30 w-[29.5vw] flex items-center gap-[2vw] text-white">
                        <p>http://localhost:3000/gdgsdjjgj</p>
                        <Copy className="cursor-pointer"/>
                      </div>
                      <div className="col-30 w-[29.5vw] flex items-center gap-[.5vw] text-white">
                        <img src={"https://www.youtube.com/favicon.ico"} width={20} height={20} />
                        <p className=" w-[20vw] overflow-hidden overflow-ellipsis whitespace-nowrap">
                          https://www.bing.com/search?pglt=931&q=how+to+hide+overflow+text+in+css&cvid=18c11b70a9f74e3cb5b6f6e349cd4216&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEDSAQg4ODk2ajBqMagCALACAA&FORM=ANNTA1&PC=U531
                        </p>
                      </div>
                      <div className="col-10 w-[9.5vw] text-white">
                        <QrCode />
                      </div>
                      <div className="col-10 w-[9.5vw] text-white">
                        <p>20</p>
                      </div>
                      <div className="col-10 w-[9.5vw] text-white flex items-center gap-[1vw]">
                        <p>Active</p>
                        <Link size={14}/>
                      </div>
                      <div className="col-10 w-[9.5vw] text-white">
                        <p>Oct-10-2023</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}
