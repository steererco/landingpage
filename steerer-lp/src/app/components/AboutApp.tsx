export const AboutApp = (): JSX.Element => (
    <>
        <FirstRow />
        <SecondRow />
    </>
)

const FirstRow = (): JSX.Element => (
    <>
        <div className="h-screen bg-white px-20 flex flex-row justify-center justify-between items-center">
            <div className="bg-gray1/[.1] rounded-[20px] w-5/12 h-2/3" />
            <div className="flex flex-col w-5/12">
                <p className="text-black text-left font-poppins font-medium text-4xl">Get ready for a Game Revolution with the Steerer App!</p>
                <p className="text-black/[.7] font-inter text-xl mt-6" >We understand that soccer is more than just a sport for you. It&apos;s the
                    passion that flows in your veins, the dream you tirelessly chase. Now,
                    envision having access to secrets from professional teams, international
                    -level analysis, and a community that shares the same determination.
                </p>
            </div>
        </div>
    </>
)

const SecondRow = (): JSX.Element => (
    <>
        <div className="h-screen bg-white px-20 flex flex-row justify-center justify-between items-center">
            <div className="flex flex-col w-5/12">
                <p className="text-black text-left font-poppins font-medium text-4xl">Find sponsors near you</p>
                <p className="text-black/[.7] font-inter text-xl mt-6" >Looking for support for your project? Want to take your team to the next level?
                    The solution is closer than you think! With Steerer, it`s easy to find sponsors
                    near you, ready to believe in your potential and support your ambitions.<br /> <br />
                    Don`t waste any more time seeking support in the dark. Find sponsors near you
                    with Steerer and open doors to success. Join our community and take the next
                    step in your journey to greatness!
                </p>
            </div>
            <div className="bg-gray1/[.1] rounded-[20px] w-5/12 h-2/3" />
        </div>
    </>
)
