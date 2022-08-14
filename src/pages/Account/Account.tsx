import "./Account.css";
import { BiWallet } from "react-icons/bi";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { GrAchievement } from "react-icons/gr";

const Account = () => {
  return (
    <div className="account">
      <h1>Your Account</h1>
      <div className="account__container">
        <div className="account__top">
          <div className="account__avatar">
            <img src={require("../../images/avatar.jpg")} alt="avatar" />
          </div>
          <div className="account__username">
            <h3>LamisAbdullah</h3>
            <p>@lamisabdullah</p>
          </div>
        </div>
        <div className="account__bot">
          <p>Dashboard</p>
          <div className="account__bot-item">
            <div className="account__icon green">
              <BiWallet />
            </div>
            <h3>Status</h3>
          </div>
          <div className="account__bot-item">
            <div className="account__icon yellow">
              <GrAchievement />
            </div>
            <h3>Achievements</h3>
          </div>
          <div className="account__bot-item">
            <div className="account__icon gray">
              <RiGitRepositoryPrivateLine />
            </div>
            <h3>Privacy</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
