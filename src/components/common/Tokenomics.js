const Tokenomics = () => {
  return (
    <div className="container mx-auto mt-20 text-primary mb-20">
      <div className="flex items-center relative px-16 py-16 rounded-[48px] gap-12 mx-auto" style={{
        backdropFilter: 'blur(12px)',
        background: 'hsla(0,0%,100%,.01',
        border: '1px solid hsla(0,0%,100%,.1'
      }}>
        <div className="flex flex-col gap-16 w-full">
          <h1 className="text-5xl lg:text-8xl text-center">Tokenomics</h1>
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <img className="rounded-full" src="/images/bbc_token.jfif" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">BBC</h1>
                <p className="text-lg">Token name</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">1,000,000,000</h1>
                <p className="text-lg">Total Supply</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">20%</h1>
                <p className="text-lg">Presale</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">20%</h1>
                <p className="text-lg">Liquidity Provision</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">10%</h1>
                <p className="text-lg">Team and Advisors</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">25%</h1>
                <p className="text-lg">Ecosystem Growth</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">25%</h1>
                <p className="text-lg">Community Rewards</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-20 gap-24">
            <img className="rounded-full" src="/images/gas_token.jfif" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">GAS</h1>
                <p className="text-lg">Token name</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">100,000,000</h1>
                <p className="text-lg">Total Supply</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">40%</h1>
                <p className="text-lg">Presale</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">20%</h1>
                <p className="text-lg">Team and Advisors</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">15%</h1>
                <p className="text-lg">Ecosystem Growth</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-[24px] p-[30px]">
                <h1 className="text-3xl">25%</h1>
                <p className="text-lg">Community Rewards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
