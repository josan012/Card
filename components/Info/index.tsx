import Style from "./styled";
import Image from "next/image";

const Info = () => {
  return (
    <Style>
      <div className="center">
        <div className="background">
          <div className="card">
            <div className="logo">
              <Image
                src="/Screenshot_1.png"
                alt="photo"
                width={317}
                height={317}
              />
            </div>
            <div className="Info">
              <h1 className="name">Josan Mihai</h1>
              <p className="title">Frontend Developer</p>
              <a href="mailto: mihai.josan12@gmail.com">
                <div className="email">Email</div>
              </a>
            </div>
            <div className="text">
              <h1 className="about">About</h1>
              <p className="about-text">
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </p>
              <h1 className="interest">Interests</h1>
              <p className="interest-text">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </p>
            </div>
            <div className="footer">
              <ul>
                <li>
                  <a href="https://www.facebook.com/mihai.josan.773/">
                    <Image
                      src="/facebook.png"
                      alt="photo"
                      width={25}
                      height={25}
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Image
                      src="/Instagram.png"
                      alt="photo"
                      width={25}
                      height={25}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/twitter.png"
                      alt="photo"
                      width={25}
                      height={25}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/josan012">
                    <Image
                      src="/GitHub.png"
                      alt="photo"
                      width={25}
                      height={25}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Info;
