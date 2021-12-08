import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>塘里</title>
        <meta name="description" content="唐风集里，收卷波澜" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={"//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>唐风集里，收卷波澜</h1>

        <p className={styles.description}>在这里一起编程、一起思考</p>

        <div className={styles.grid}>
          <a href="https://blog.tangly1024.com" className={styles.card}>
            <h2>博客 &rarr;</h2>
            <p>塘里博客，分享一些有趣的技术与思考</p>
          </a>

          <a href="https://game.tangly1024.com" className={styles.card}>
            <h2>游戏 &rarr;</h2>
            <p>塘里小游戏，自己平时玩的H5小游戏</p>
          </a>

          <a
            href="https://blog.tangly1024.com/article/about"
            className={styles.card}
          >
            <h2>关于我 &rarr;</h2>
            <p>一个程序员的自我独白，对酒当歌，人生几何</p>
          </a>

          <a href="https://github.com/tangly1024" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>我的代码都在这里开源，欢迎Star和Fork</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://beian.miit.gov.cn/" className="ml-1 font-bold">
          闽ICP备20010331号
        </a>
        <br />
      </footer>
      <div>
        <span id="busuanzi_container_site_pv" style={{ display: "none" }}>
          总访问量
          <span id="busuanzi_value_site_pv" className="px-1">
            {" "}
          </span>
          &nbsp;次&nbsp;
        </span>
        <span id="busuanzi_container_site_uv" style={{ display: "none" }}>
          总访客数
          <span id="busuanzi_value_site_uv" className="px-1">
            {" "}
          </span>
          &nbsp;人
        </span>
      </div>
    </div>
  );
}
