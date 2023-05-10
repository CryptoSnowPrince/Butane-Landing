const TokenManage = () => {
  return (
    <section className="text-[#434343] bg-white pb-10">
      <div className="mx-auto min-h-[831px] flex items-center md:px-6">
        <div className="container grid items-center grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 md:mt-0 mt-10 lg:mt-[100px]">
            <img className="h-[80%]" src="/images/manage_token.png" />
          </div>
          <div className="col-span-2 md:col-span-1 pl-[20px] md:text-left text-center">
            <h1 className="text-[#ff7200] md:text-[48px] text-[30px] font-bold mb-[40px]">Manage Your Token</h1>
            <p className="text-[22px] leading-8 mt-[30px] ">
              The Crypto and very own app is available to download for your iPhone or Android™ device! ... Now Download the new mobile app, and get the most out of your membership with special tools designed to enhance your experience. Download BUTANE mobile app, and get the most out of your membership with special tools designed to enhance your experience.
            </p>
            <div className="grid grid-cols-2 gap-10 md:mt-[120px] mt-[80px]">
              <div className="col-span-2 md:col-span-1">
                <div className="border-[3px] border-[#ff7200] rounded-[50px] text-center">
                  <img className="-mt-[50px]" src="/images/icon_metamask.png" />
                  <button className="mt-[40px] bg-[#ff7200] text-white text-[22px] font-bold py-[20px] px-[30px] rounded-[100px]">BBC on Metamask</button>
                  <button className="my-[30px] bg-[#ff7200] text-white text-[22px] font-bold py-[20px] px-[30px] rounded-[100px]">GAS on Metamask</button>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 md:mt-0 mt-[50px]">
                <div className="border-[3px] border-[#3375bb] rounded-[50px] text-center">
                  <img className="-mt-[50px]" src="/images/icon_trustwallet.png" />
                  <button className="mt-[40px] bg-[#3375bb] text-white text-[22px] font-bold py-[20px] px-[30px] rounded-[100px]">BBC on TrustWallet</button>
                  <button className="my-[30px] bg-[#3375bb] text-white text-[22px] font-bold py-[20px] px-[30px] rounded-[100px]">GAS on TrustWallet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TokenManage
