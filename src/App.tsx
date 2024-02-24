function App() {
  return (
    <div className={'flex w-screen h-screen items-center justify-center'}>
      {/*  카드*/}
      <div className={'w-[450px] border-[1px] rounded-xl p-5 space-y-5 mb-20'}>
        {/*  카드 타이틀*/}
        <p className={'text-2xl font-bold text-center p-5'}>My Service</p>
        {/*  이메일 폼*/}
        <div className={'flex items-center justify-center px-10'}>
          <div className={'w-full'}>
            <p className={'text-gray-800 text-[14px]'}>Email</p>
            <input
              type={'email'}
              placeholder={'example@email.com'}
              className={
                'border-[1px] w-full h-[40px] px-2 outline-blue-300 text-[14px]'
              }
            />
          </div>
        </div>
        {/*  비밀번호 폼*/}
        <div className={'flex items-center justify-center px-10'}>
          <div className={'w-full'}>
            <p className={'text-gray-800 text-[14px]'}>Password</p>
            <input
              type={'password'}
              placeholder={'Password'}
              className={
                'border-[1px] w-full h-[40px] px-2 outline-blue-300 text-[14px]'
              }
            />
            <div className={'w-full flex justify-end py-1'}>
              <a
                className={'text-blue-400 text-[12px] text-right underline'}
                href={'#'}>
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
        {/*  로그인 버튼*/}
        <div className={'flex flex-col items-center justify-center px-10'}>
          <button
            className={
              'bg-blue-400 text-white p-2 w-full h-[55px] hover:bg-blue-300 rounded'
            }>
            Login
          </button>
          <a className={'text-blue-400 py-5 text-[14px]'} href={'#'}>
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
