import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Tokenomics from "../../components/common/Tokenomics"
import TokenManage from "../../components/common/TokenManage"

const HomePage = () => {
  return (
    <>
      <div className="bg-background drawer">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div
          className="drawer-content"
          style={{
            scrollBehavior: "smooth",
            scrollPaddingTop: "5rem",
          }}
        >
          <Navbar />
          <div className="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-background pt-20">
            <div className="hero min-h-screen bg-background">
              <div className="hero-content text-center text-primary">
                <div className="max-w-md">
                  <div className="md:hidden animate__animated animate__fadeIn animate__delay-1s">
                    <img className="w-full p-6" src="/images/branding_logo.gif" />
                  </div>
                  <h1 className="text-3xl lg:text-5xl font-bold animate__animated animate__jackInTheBox">
                    A Blockchain Ecosystem built for everyone
                  </h1>
                  <p className="py-6 animate__animated animate__jackInTheBox">
                    Whether you are a blockchain enthusiast, a small startup or a
                    Fortune 500, BUTANE is the perfect blockchain infastructure for
                    introducing your ideas to a growing ecosystem of passionate users.
                  </p>
                  <div className="hidden md:block animate__animated animate__fadeIn animate__delay-1s">
                    <img className="w-full p-6" src="/images/branding_logo.gif" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#434343] bg-white">
            <div className="mx-auto min-h-[700px] md:min-h[-813px] flex items-center md:px-6">
              <div className="container gap-4">
                <div className="flex flex-row pl-[20px] text-center md:text-left gap-16 animate__animated animate__jackInTheBox">
                  <img src="/images/butane_chain.jpg" className="hidden lg:block max-w-xl rounded-lg shadow-2xl" />
                  <div>
                    <h1 className="mt-20 lg:mt-0 text-3xl lg:text-5xl font-bold uppercase">butane smart chain</h1>
                    <h1 className="text-3xl lg:text-5xl">Powering Multi Net works both</h1>
                    <h1 className="text-3xl lg:text-5xl uppercase">EVM & COSMOS</h1>
                    <p className="py-6 text-lg">Butane is an Open-Source, Typescript-Based, Layer 1 Blockchain Protocol built to be simple and efficient.</p>
                    <ul className="mt-[20px]">
                      <li className="flex items-center mb-[25px]">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDMUQ3NjNFRUM1NzExRURCNzU1RDYwOUUxOEQ0QUM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDMUQ3NjNGRUM1NzExRURCNzU1RDYwOUUxOEQ0QUM4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0MxRDc2M0NFQzU3MTFFREI3NTVENjA5RTE4RDRBQzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0MxRDc2M0RFQzU3MTFFREI3NTVENjA5RTE4RDRBQzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6CIXQWAAAC7ElEQVR42rSXW0hUQRjHd9fVNUtaQmTL6J5B9wcTuxhBlFEURKGBUEEQYVlRVC+aT2G9mUGCVHShXn0og16Cgkq6QGUPGaElQtHNTIvy0vb/4r8wTeecnd0z/uHH7pmdOefb7zZnMgJmauTn64BlhVzGz4E85boYLFKuy0DVaBkQ4gNPKGNPwQt+HwsugAmBUdQqcFO5DirfJ4PHIMfmA8Xdx0C+5omD4B4YAO/BDbBMW7sc7PZrQC54Dr6CQjAO3AVfQB1YD7bR9SPgONcd4PUpG17IAJVgEjgLXoKJ2hwxbAMYBpvAauaLVc0Av8FSbXw66APzwGmGJsDqEA9cB89YqrfAGbBGyx/Xf76WhOmFHpe5DayGFSDOsMlnG2gCh8EucBK0giHQCao9Sv7vzX4QcekR8NBl7l7wkV6SB18EC0EWmAVKQTnHRDFQA/rBHa5LqhJanuvw2w7mx05WReJf1dOgIY5LCLvpFTFmGrgNPoE5JiGRWB91+T0b3AfNWsnmKfGO0chWJuxc3rcFvGGi/yeZdJ5JthkMMp6qMnnTblN3QkvYtuWeERrfpE+aQvdJ94tyrAL8Yl4kJAvfsiJSUYGyt5TRw/90Usn+IpesH2BPeMU4l/os8yCrrFLdjIbZ3xPawx2xjZ2ugfETPfJpQJzPzfTaDesVgyRu61gdtjpuPkPpaICU0H4ly0eYue8sGRChEZ+9Xkiu0JBvdNlPVsV3hsuPpOF1sSqSKovxl07WnkgcCzrEEARNF1wCly1ueFFW18qQ4YIWbr8RSwaUMMQFpgtyGP+NFh5exJDWpBIC0VX2gGyfBlTxJdfztdxJ+/gm3OzTgLDJucBJvSydLXxZTVfj2QfS1nbWcjTN9Y1qOw+ncYMOMMbgX8R4iBnkTisNbQHY6jeM8qLyJMmcCpZZXEMMqfUbgnYeYrz0gK6WU9RMMBtMdTrOpRqCxWA++MDjm9tmU8x222P7zFDu4lqda6YV9keAAQBiZaqebQEDFQAAAABJRU5ErkJggg==" />
                        <div className="font-bold ml-[15px] text-lg lg:text-[22px]">Eco-Friendly DPos Consensus</div>
                      </li>
                      <li className="flex items-center mb-[25px]">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEwOTE2RUYyRUM1NzExRURCQjJGRTY0OUZFQUM4QjAwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEwOTE2RUYzRUM1NzExRURCQjJGRTY0OUZFQUM4QjAwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTA5MTZFRjBFQzU3MTFFREJCMkZFNjQ5RkVBQzhCMDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTA5MTZFRjFFQzU3MTFFREJCMkZFNjQ5RkVBQzhCMDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz53Yb1PAAAEEUlEQVR42rSXb2jVVRjH7/XPptuc7YUkbsJqumWaI5Z7Y9NyTmTOKZKiV5OQyV7kCBa+kF0KnEJCCtqbXrhgpQTFEBGm7IVR5ARNYqiZUk5SUsy7ysRJmbfvwc9vPBx+93fvNTzwgfM753me8/zOec5zzoml0+mYI8/ynOgWP0A3bTmXsXGfwIEmMSJ6xVLopa3paTvQIf4S60L61tHX8TQcKBY94hexIEJuATI96PxvBxaKg+Ku6BfTaH9WNIv3oJm2GDL96BzERl4OjBPviisiJfaLufS18YcPxQXWvpf6Q/rakJ2LbopA3Sbi2RwoFF+KS2KNKKC9XBwX10Rrhuktpu8asuW0F2DL2TwkJkY58L74Vkw1hucT4R+LKd6g80St1zYF2RF0gzIV28koB46bKYzh7feiK+SPZ4g/WOsZIf1d6E40bW3Ex9i44zylWeKq+U6ytntCBljDAOeo+2UPuknT5mzPDo/Gx+WE2GKy3T2mOaycZM93UA8r87ARZMktjDE27gRP4aKYQ/1V/s5F+GSx2sTGeNEgNvO9T7wt/uXbrf8RdM9haxjbF+2AvgM/ipXU61AOMuB2ccrI7hI3TL3Jyx/Piw+w4Wx9JmrEsaglWIwTMSJ2o9nTKRJLUUSCK0ImZXbHRmwFP/haVBD+ZrLdTHHdLI0zWMUf1YYMXktfFfUh2q9jK8iSt/2s5x+zw9TPi5dMn5vuRnFa7A5xYDd9jWZpYtg4T33YP7Z9B6pJwa58x9rZ8kiUmSmdDMGSlSFjSx22YtiujnLgRXGZupvOeq+/RCwXfWIRBq9Q76OvxNOpN8F8mTEyBuGgWEu9VPwqEkZ8LTl9JxlwK9ylzfW9YeQT2Cg1+oNRqdhF6TJjYIW4I6bzvYq9PmTyRYz6EH2v0DYd3RVGblmwyzI58Lno9KbwE/J3sdkd40OC0C3nJHMy9qNrSydjZHRgE1uxwTvFBsRP5IlsZTGyA96p2oDtTdkuJDvI359y4QwCtV38yXXLrWWl0amkrQeZdjMrS7F1D9s5XcmqMPSAvdvFlcsNdIBAuk9SuU19kL5KZLvQfcDgNfncCfcSVC56W9hiKe5+9hyZD/ZMaUa2D91SbH2UqwNuG/3OLNjSygUkGbH+SWRaQ2bU2VyfzYEXmPqWiEdJmrtdoWkvpC0d8ThpIV/MsQ7Eg8Hj8fgkMtYz4gzH6TT2/lmuVl+Jn9njL4svzKPE3Y5u8bevi394Jxwl+q+SFd0P1mncUf8+EMfITYLH3W7fFBtw4EPkXeb7m7UO/vYt9r27AX+D7Dvofs1doJLtWcb5MRqWiv2yksyVINorcsgDFcgmvAvOE72MivDUbaMleTxgl6AzmukCk8/b8HBIes6ldKIb+Tb8T4ABABgtERBgVOhfAAAAAElFTkSuQmCC" />
                        <div className="font-bold ml-[15px] text-lg lg:text-[22px]">Expandable, Modular Codebase</div>
                      </li>
                      <li className="flex items-center mb-[25px]">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFBRTUwQTNERUM1NzExRURCMUNGODgxRTg1ODYyNzZEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFBRTUwQTNFRUM1NzExRURCMUNGODgxRTg1ODYyNzZEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUFFNTBBM0JFQzU3MTFFREIxQ0Y4ODFFODU4NjI3NkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUFFNTBBM0NFQzU3MTFFREIxQ0Y4ODFFODU4NjI3NkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6kTy9wAAADAklEQVR42rSWW4iNURTHv3MYRmSkOW4n0ziMyCtjZtCMkgdNzXib0DwwjXhkhBcejNyj5JEiqZlyK5pyL+GBItTk8oCiiDHut5k5/qv+n1a7/X3f/r5zrPp1zrcva6+999prrVQ+n/dEUqmUl0BW8fdk3In/1i3QgFL+/kxqQDpinFjVE9I/iQRJD3WEW+JbEyDjQvqOkdhz/XXTDqfVDzpAraUvHXCKtZzTH6U87XhlOe60xGjvI1pKODbn7AwRVyBSDj6CNosTlhptbRxb7rSuowEiS0C1w7hqjnXaeKHPMLG4PsP/LmEGrAZDYmyBDFGXPdAEXMFY8AxMADvANcvcA2AqF3kNNvK/lsVgG3gHqsBn8wqCnHAPeAHOBkTCneArmAfmgi9gn2XcBXCeuna7voIcY3sLqOMRVqn+deAPWKbaloLfPAVfKsEgqKcu0TnNxYDT4Lb6vgcO8X8zGABrLLtdyQVb+b0LPFb9orM7yoB67rhGTWxlSJVdfgfbQxx3A09nOe99veqroe4F2oDhRuY7CHp5fJWqfTR94Sl4QiW3QBnHfGLbG/CQp+jRmBa1Ri/XmO87rH4F4+ksY2i9lpHMbG/5/Rw08EpEzoEbYAa/J9Ljfxh6MmyrwLp9tlcgIfQXWGtMzHI3DQ6xxd/dLKO9nf7TGOWEK7hYk6GgWx1tmJwAV4y2Ri7e7pqMOuhwdaptEZVUhCye4XNrVm0SK76BzrjZUJzlg3GUD8yAYsgW8BIM4/d0+s3xJOlYvL+LjjlZ5fr3lhrA46IydquqIeTVXLYUMs71gHj/de5c8sMonootuTTx+DMcd0fNK6ggKePbvgpGgL3gvmXcJTpgms/yFZhSrIooy7s9xXguIXeh6p/JKCdP8AhLsjnFLslmswDdzx12qT7JFXfBZsaRyHiRxACPu5ZIdpGxIssw3c8rGDRCb9EN8JhoBhjtOhlc/OpnU5yaMKkBHrNcnjnjEf8fjluUFmKAXxX5Oz8Tt8AthgEiR8FNvnsviQF/BRgARvHKG7u7ZUwAAAAASUVORK5CYII=" />
                        <div className="font-bold ml-[15px] text-lg lg:text-[22px]">Customizable Transaction Logic</div>
                      </li>
                    </ul>
                    <button className="btn btn-primary text-lg">View github</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="text-[#434343] md:px-6 bg-white">
            <div className="relative mx-auto min-h-[813px] flex items-center">
              <div className="container grid items-center grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1 pl-[20px]">
                  <h1 className="text-[#ff7200] md:text-[48px] leading-[40px] md:leading-[70px] text-[30px] font-bold">The BUTANE NETWORK</h1>
                  <h1 className="text-[#ff7200] md:text-[48px] text-[30px] leading-[40px] md:leading-[70px]">Home of the $BBC, $GAS</h1>
                  <p className="text-[22px] leading-8 mt-[30px] text-center md:text-left">
                    The Butane Network is the L1 blockchain and is a fully decentralized network run by validators and an army of enthusiasts.
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <img className="w-full" src="/images/bbc_gas_tokens.png" />
                </div>
              </div>
              <img className="absolute top-0 w-full -z-[1] px-[100px] h-full object-contain" src="/images/tokens_back.png" />
            </div>
          </section>
          <Tokenomics />
          <TokenManage />
          <Footer />
        </div>
        <div
          className="drawer-side"
          style={{
            scrollBehavior: "smooth",
            scrollPaddingTop: "5rem",
          }}
        >
          <label htmlFor="drawer" className="drawer-overlay"></label>
          <aside className="bg-drawer w-80">
            <div className="h-4"></div>
            <ul className="menu menu-compact flex flex-col p-0 px-4 text-primary gap-2">
              <li>
                <a href="https://butane.tech/pages/coming-soon" className="flex gap-4 hover:bg-mandatory">
                  <span className="flex-none">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-6 h-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                      ></path>
                    </svg>
                  </span>
                  <span className="flex-1">Dao</span>
                </a>
              </li>
              <li>
                <a href="https://butane.tech/pages/coming-soon" className="flex gap-4 hover:bg-mandatory">
                  <span className="flex-none">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-6 h-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                      ></path>
                    </svg>
                  </span>
                  <span className="flex-1">Presale</span>
                </a>
              </li>
              <li>
                <a href="https://butane.tech/pages/coming-soon" className="flex gap-4 hover:bg-mandatory">
                  <span className="flex-none">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-6 h-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                      ></path>
                    </svg>
                  </span>
                  <span className="flex-1">Multi Sender</span>
                </a>
              </li>
              <li>
                <a href="https://gaspad.io/" className="flex gap-4 hover:bg-mandatory">
                  <span className="flex-none">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-6 h-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                      ></path>
                    </svg>
                  </span>
                  <span className="flex-1">Launchpad</span>
                </a>
              </li>
              <li>
                <a href="https://flamez.io/" className="flex gap-4 hover:bg-mandatory">
                  <span className="flex-none">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-6 h-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                      ></path>
                    </svg>
                  </span>
                  <span className="flex-1">AMM</span>
                </a>
              </li>
              <li>
                <a href="https://butane.tech/pages/coming-soon" className="flex gap-4 hover:bg-mandatory">
                  <span className="flex-none">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-6 h-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                      ></path>
                    </svg>
                  </span>
                  <span className="flex-1">Airdrop dapp</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
};

export default HomePage;
