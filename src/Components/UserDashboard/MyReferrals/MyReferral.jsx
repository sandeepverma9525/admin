import React from 'react'
import style from './MyReferrals.module.css'

const MyReferral = () => {
  return (
    <div className={style.MyReferral_Container}>
      <div className={style.heading}>
      <h1 className={style.head}>My Referrals</h1>
      <p className={style.parag}>Share Pro Net Solutions and earn rewards for every referral</p>
      </div>

    <div className={style.allrefcard}>

      <div className={style.ref_card}>
        <span className={style.ref_earn}>Total Earning</span>
        <h1 className={style.ref_cas}>$1250.75</h1>
      </div>

      <div className={style.ref_card}>
        <span className={style.ref_earn}>Pending Earnings</span>
        <h1 className={style.ref_cas}>350.64</h1>
      </div>

      <div className={style.ref_card}>
        <span className={style.ref_earn}>Available for Withdraw</span>
        <h1 className={style.ref_cas}>$900.43</h1>
      </div>

      <div className={style.ref_card}>
        <span className={style.ref_earn}>Conversion Rate</span>
        <h1 className={style.ref_cas}>23%</h1>
      </div>
    </div>


    <div className={style.share}>
      <h2 className={style.share_head} >Your Referral Link & Code</h2>
      <p className={style.share_para}>Share your unique referral link or code with friends and earn a 10% commission on their purchases</p>

      <form className={style.share_code}>
        <label>Referral Code</label>
        <div>
        <input type="text" readOnly placeholder='PRONET-123456' className={style.share_input}/>
        <button className={style.ref_button}>copy</button>
        </div>
      </form>
    </div>

    </div>
  )
}

export default MyReferral
