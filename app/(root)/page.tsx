import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Foti",
    lastName: "C",
    email: "foti.ceci@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>

      <RightSideBar
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 1450.24 }, { currentBalance: 200.32 }]}
      />
    </section>
    // <section className="home">
    //   <div className="home-content">
    //     <header className="home=header">
    //       <HeaderBox
    //         type="greeting"
    //         title="Welcome"
    //         user={loggedIn?.firstName || "Guest"}
    //         subtext="Access and manage your account and transcactions efficiently."
    //       />

    // <TotalBalanceBox
    //   accounts={[]}
    //   totalBanks={1}
    //   totalCurrentBalance={1250.35}
    // />
    //     </header>
    //   </div>

    // <RightSideBar
    //   user={loggedIn}
    //   transaction={[]}
    //   banks={[{ currentBalance: 1450.24 }, { currentBalance: 200.32 }]}
    // />
    // </section>
  );
};

export default Home;
