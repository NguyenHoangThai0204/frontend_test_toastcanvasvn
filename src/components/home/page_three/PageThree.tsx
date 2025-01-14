
import backgroundImage from '../../../assets/banner-03-kr.8bc690f0076e3d960876.png';
import './PageThree.css';

export const PageThree = () => {
    return (
        <div
            className="page3-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="page3-flex-container">
                <div className="page3-card-container">
                    <div className="page3-card">
                        <div className="page3-card-header">
                            <p className="text-4xl font-bold text-white">Product</p>
                        </div>
                        <div className="page3-card-body">
                            <p className="text-lg text-white opacity-0 group-hover:opacity-100">
                                High-Performance Server with an extensive selection of serviceable capabilities,
                                building IDC, and incorporating the latest storage technology applicable to various I/O devices.
                                Additionally, Maxius offers various blockchain solutions, including IPFS. The company continues to develop and expand globally by supplying diverse products and solutions.
                            </p>
                        </div>
                    </div>
                    <div className="page3-card">
                        <div className="page3-card-header">
                            <p className="text-4xl font-bold text-white">Technology</p>
                        </div>
                        <div className="page3-card-body">
                            <p className="text-lg text-white opacity-0 group-hover:opacity-100">
                                High-Performance Server with an extensive selection of serviceable capabilities,
                                building IDC, and incorporating the latest storage technology applicable to various I/O devices.
                                Additionally, Maxius offers various blockchain solutions, including IPFS. The company continues to develop and expand globally by supplying diverse products and solutions.
                            </p>
                        </div>
                    </div>
                    <div className="page3-card">
                        <div className="page3-card-header">
                            <p className="text-4xl font-bold text-white">Application</p>
                        </div>
                        <div className="page3-card-body">
                            <p className="text-lg text-white opacity-0 group-hover:opacity-100">
                                High-Performance Server with an extensive selection of serviceable capabilities,
                                building IDC, and incorporating the latest storage technology applicable to various I/O devices.
                                Additionally, Maxius offers various blockchain solutions, including IPFS. The company continues to develop and expand globally by supplying diverse products and solutions.
                            </p>
                        </div>
                    </div>
                    <div className="page3-card">
                        <div className="page3-card-header">
                            <p className="text-4xl font-bold text-orange-400">Blockchain</p>
                        </div>
                        <div className="page3-card-body">
                            <p className="text-lg text-white opacity-0 group-hover:opacity-100">
                                High-Performance Server with an extensive selection of serviceable capabilities,
                                building IDC, and incorporating the latest storage technology applicable to various I/O devices.
                                Additionally, Maxius offers various blockchain solutions, including IPFS. The company continues to develop and expand globally by supplying diverse products and solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
