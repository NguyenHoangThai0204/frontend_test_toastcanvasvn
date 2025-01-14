
import backgroundImage from '../../../assets/banner-02-kr.d83fd94316a49f91c1e8.png';
import './PageTwo.css';

export const PageTwo = () => {
  return (
    <div
      className="page2-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="page2-content">
        <div className="page2-text">
          1. Self-produced semiconductors <br />
          2. Production and Sales of High-Performance Servers with self-manufactured semiconductors <br />
          3. Construction of operative Blockchain IDC based on high-performance servers <br />
          4. Establish solution relating to Blockchain (IPFS)
        </div>
      </div>
    </div>
  );
};
