import React, {useState, useEffect} from 'react';
import LoaderStyle from '../../public/styles/Loader.module.css';

function SiteLoader() {

    const [maincontainer, setMaincontainer] = useState();
    const [box1, setBox1] = useState({

        backgroundColor: "#efcb55"

    });
    const [box2, setBox2] = useState();
    const [box3, setBox3] = useState({
    
        backgroundColor: "#efcb55"

    });

    const [text1, setText1] = useState({

        transform: "translateX(-500px) scale(0)",
        filter: "blur(50px)",

    });
    const [text2, setText2] = useState({

        transform: "scale(0) rotateY(0deg)",
        filter: "blur(50px)",

    });
    const [text3, setText3] = useState({

        transform: "translateX(-500px) scale(0)",
        filter: "blur(50px)",

    });

    function handelOnLoad() {
        
        useEffect(() => {

            setTimeout(() => {

                setMaincontainer({

                    transform: "scale(0)",
                    transition: "all 0.8s ease 1s",

                });

                setBox1({

                  transform: "translateY(-2000px)",
                  transition: "all 3s ease",
                  border: "20px solid #efcb55",

                });

                setBox2({

                  transform: "translateY(2000px)",
                  transition: "all 3s ease",
                  border: "20px solid #efcb55",

                });

                setBox3({

                    transform: "translateY(-2000px)",
                    transition: "all 3s ease",
                    border: "20px solid #efcb55"

                });

            }, 1500);

            setText1({

              transform: "translateX(0px) scale(1)",
              transition: "all 0.8s ease",
              filter: "blur(0px)",
              
            });

            setText2({

                transform: "scale(1) rotateY(360deg)",
                transition: "all 0.8s ease 0.5s",
                filter: "blur(0px)",
                color: "#efcb55",
                fontSize: "500px"

            });

            setText3({

                transform: "translateX(0px) scale(1)",
                transition: "all 0.8s ease",
                filter: "blur(0px)",

            });

        }, []);

    }
    
    return (

        <>
        
            <div className={LoaderStyle.loader} onLoad={handelOnLoad()} style={maincontainer}>

                <div className={LoaderStyle.box} style={box1}><h1 style={text1}>S</h1></div>
                <div className={LoaderStyle.box} style={box2}><h1 style={text2}>S</h1></div>
                <div className={LoaderStyle.box} style={box3}><h1 style={text3}>D</h1></div>

            </div>
            
        </>

    );

}

export default SiteLoader;