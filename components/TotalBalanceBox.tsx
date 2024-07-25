import React from 'react'

const TotalBalanceBox = ({
  accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        {/* Doughnut chart */}
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
          Banks Account: {totalBanks}
        </h2>
      </div>
    </section>
  )
}

export default TotalBalanceBox
