import{r as t,j as e,k as s,o as a,b as i,d as l,a as o,h as n,e as r,f as c,t as p,g as d,i as m,n as u,w as x,v as b}from"./vue.CjL1w9zR.js";import{_ as h}from"./part.B8b6dx0a.js";import{ac as g,ad as f,ae as w,D as v,af as y,z as P}from"./three.LU9v7QRw.js";import{G as _,D as R}from"../index.Dbz6R7rs.js";const j={__name:"model",props:{path:String,scale:Number,positionY:{type:Number,default:0},rotation:{type:Boolean,default:!1}},setup(o){const n=o,r=t(null),c=t(null),p=new g,d=new _,m=new R;m.setDecoderPath("./scripts/libraries/draco/"),d.setDRACOLoader(m),d.load(n.path,(t=>{const e=t.scene;e.position.set(0,n.positionY,0),e.scale.set(n.scale,n.scale,n.scale),e.rotation.y=n.rotation?Math.PI/2:-Math.PI/2,p.add(e),function t(){requestAnimationFrame(t),e.rotation.y+=.0025,h.render(p,j)}()}));const u=new f(4210752),x=new w(4210752),b=new v(16777215,5);let h,j;return b.position.set(5,5,5),[u,x,b].forEach((t=>p.add(t))),e((()=>{const t=r.value,e=c.value;function a(){const t=e.clientWidth,s=e.clientHeight;h.setPixelRatio(window.devicePixelRatio),h.setSize(t,s),j.aspect=t/s,j.updateProjectionMatrix()}h=new y({canvas:t,alpha:!0}),h.setSize(e.clientWidth,e.clientHeight),j=new P(75,e.clientWidth/e.clientHeight,.1,1e3),j.position.z=5,a(),window.addEventListener("resize",a),s((()=>{window.removeEventListener("resize",a),h&&(h.dispose(),h.forceContextLoss()),p&&p.traverse((t=>{t.texture&&t.texture.dispose(),t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})),m&&m.dispose()}))})),(t,e)=>(a(),i("div",{ref_key:"frameRef",ref:c,class:"flex justify-center w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-lg bg-zinc-800 bg-opacity-80 mt-5",id:"frame"},[l("canvas",{ref_key:"canvasRef",ref:r,class:"w-[300px] sm:w-[400px] md:w-[500px] h-full",id:"model"},null,512)],512))}},k={class:"animate-part-in font-Default text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12"},M={class:"self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5"},S={class:"self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5"},D={class:"self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5"},G={__name:"fusion",setup:t=>(t,e)=>{const s=o("router-link");return a(),i("div",k,[e[3]||(e[3]=n('<h3 class="font-bold text-gray-100 text-xl md:text-2xl text-center mb-4"> 初代大型ロボット <span class="whitespace-nowrap">「マードック」</span></h3><p><span class="font-semibold text-gray-100">水中での自然な動き</span> を目指して一から設計開発した初代大型ロボット。中間発表会でも注目を集めた意欲作です。 </p><h4 class="text-lg md:text-xl mt-4 mb-1">特徴</h4><ul class="list-disc leading-relaxed font-semibold text-gray-200 text-start mb-4"><li>Raspberry Pi Zeroを用いた制御システム</li><li>サーボモータとDCモータによる自然な泳ぎ</li><li>独自の磁石機構で安全な釣り体験を実現</li><li>釣り針不要の革新的な設計</li></ul><p class="text-start"> 最新のテクノロジーと独自の機構を組み合わせることで、 <span class="font-semibold text-gray-100">安心・安全な水中釣り体験</span> を提供します。 従来の釣り針を使用せず、2つの磁石を活用した画期的な仕組みを一から設計を行い作成したため、安全にお楽しみいただけます。 9軸センサーモジュールを使用して、釣られたことを認識できるような設計にもチャレンジしました。 </p>',5)),r(j,{path:"./assets/models/m1_draco.glb",scale:1.75}),l("div",M,[r(s,{to:"/sandbox/1"},{default:c((()=>e[0]||(e[0]=[l("p",{class:"inline-block w-min"},"SEE MORE",-1),l("p",{class:"inline-block w-min duration-500 ml-2 group-hover:ml-3"},">",-1),l("p",{class:"inline-block w-min duration-500 opacity-0 group-hover:opacity-100"},">",-1)]))),_:1})]),e[4]||(e[4]=n('<h3 class="font-bold text-gray-100 text-xl md:text-2xl text-center mt-10 mb-4"> 小魚型ロボット <span class="whitespace-nowrap">「小魚くん」</span></h3><p class="text-start"> お子様の楽しい釣り体験を第一に考えた、 <span class="font-semibold text-gray-100">軽量コンパクト</span> な釣りロボット！ </p><h4 class="text-lg md:text-xl mt-4 mb-1">特徴</h4><ul class="list-disc leading-relaxed font-semibold text-gray-200 text-start mb-4"><li>子供でも扱いやすい軽量設計</li><li>水流を考慮した流線型ボディ</li><li>最小限の水中モータで動作する省エネ設計</li><li>シンプルで扱いやすい非制御型システム</li><li>磁力式エサによる安全な釣り機構</li></ul><p class="text-start"> 小さなお子様でも安心して釣り体験を楽しめるよう、従来の釣り針を使用せず、 <span class="font-semibold text-gray-100">磁力でロボットを釣り上げる新しい仕組み</span> を新しく設計。 安全性と使いやすさを追求した設計で、釣りの楽しさを身近に感じていただけます。 鳳祭でも多くのお子様に体験していただきました。 </p>',5)),r(j,{path:"./assets/models/m2_draco.glb",scale:25.55}),l("div",S,[r(s,{to:"/sandbox/2"},{default:c((()=>e[1]||(e[1]=[l("p",{class:"inline-block w-min"},"SEE MORE",-1),l("p",{class:"inline-block w-min duration-500 ml-2 group-hover:ml-3"},">",-1),l("p",{class:"inline-block w-min duration-500 opacity-0 group-hover:opacity-100"},">",-1)]))),_:1})]),e[5]||(e[5]=n('<h3 class="font-bold text-gray-100 text-xl md:text-2xl text-center mt-10 mb-4"> 2代目大型ロボット <span class="whitespace-nowrap">「ぎょぼっと」</span></h3><p class="text-start"> 初代「マードック」の血統を受け継ぎ、迫力の大きさを誇る新作ロボット。 前作で課題となっていた <span class="font-semibold text-gray-100">エサの摂取機能や操作性を大幅に改善</span> し、釣り体験の実現を目指し作成しました。 </p><h4 class="text-lg md:text-xl mt-4 mb-1">特徴</h4><ul class="list-disc leading-relaxed font-semibold text-gray-200 text-start mb-4"><li>Raspberry Piを使った制御が可能</li><li>サーボモータとDCモータによる自然な泳ぎ</li><li>頭部搭載の水中モータによる強力な吸引力</li><li>エサの取り込みがスムーズな新設計</li><li>小魚くんと同じエサが使用可能</li><li>水中での実釣を想定した設計</li></ul><p class="font-semibold text-gray-100 text-lg text-center my-2"> 大型魚を釣り上げる <span class="whitespace-nowrap">興奮と感動を！</span></p>',5)),r(j,{path:"./assets/models/m3_draco.glb",scale:.155,rotation:!0}),l("div",D,[r(s,{to:"/sandbox/3"},{default:c((()=>e[2]||(e[2]=[l("p",{class:"inline-block w-min"},"SEE MORE",-1),l("p",{class:"inline-block w-min duration-500 ml-2 group-hover:ml-3"},">",-1),l("p",{class:"inline-block w-min duration-500 opacity-0 group-hover:opacity-100"},">",-1)]))),_:1})])])}},O={class:"w-full rounded-lg duration-500 bg-zinc-800 bg-opacity-80 group hover:bg-zinc-900 p-3 my-4"},E=["href"],C={class:"flex flex-col"},H={class:"font-light text-gray-400 text-sm"},z={class:"font-bold text-white text-xl mb-2"},F={class:"font-light text-gray-200 text-base"},A={__name:"card",props:{site:String,title:String,text:String,path:String},setup:t=>(e,s)=>(a(),i("div",O,[l("a",{href:t.path,target:"_blank",rel:"noreferrer"},[l("div",C,[l("h4",H,p(t.site),1),l("h3",z,p(t.title),1),l("p",F,p(t.text),1),s[0]||(s[0]=l("div",{class:"self-end whitespace-nowrap font-light text-white text-sm"},[l("p",{class:"inline-block w-min"},"READ MORE"),l("p",{class:"inline-block w-min duration-500 ml-2 group-hover:ml-3"},">"),l("p",{class:"inline-block w-min duration-500 opacity-0 group-hover:opacity-100"},">")],-1))])],8,E)]))},T={class:"animate-part-in text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12"},L={__name:"program",setup:t=>(t,e)=>(a(),i("div",T,[e[0]||(e[0]=l("p",null,[d(" 開発プロセスを効率化するためにGitHubを活用し、ソースコードの開発を行いました。 GitHubを使用することで、 "),l("span",{class:"font-semibold text-gray-100"},"バージョン管理や問題追跡などが容易"),d(" に行えます。 進行状況やコードの変更履歴を透明にし、より効果的な開発プロセスを実現しています。 ")],-1)),r(A,{site:"GitHub",title:"OtaProject2024 / PyDoch",text:"GitHub is where OtaProject2024 builds software.",path:"https://github.com/OtaProject2024/PyDoch"}),e[1]||(e[1]=l("p",null,[d(" PyDochリポジトリは、ロボットを制御するためのPythonスクリプト群です。 PyYAMLを使用した柔軟な設定管理、RPi.GPIOによるRaspberry PiのGPIOピン制御、adafruit_bno055を活用したセンサーデータの取得、そしてPyGameによる音声制御を実現しています。 さらに、 "),l("span",{class:"font-semibold text-gray-100"},"マルチスレッディングを駆使"),d(" してリアルタイムの応答性を損なわずに効率的な処理を可能にしている点が特徴です。 ")],-1))]))},I={class:"animate-part-in text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12"},W={__name:"fishguide",setup:t=>(t,e)=>(a(),i("div",I,[e[0]||(e[0]=l("p",null,[d(" 釣りに興味があるけれど、どんな道具が必要なのか、服装はどうするのか、 "),l("span",{class:"font-semibold text-gray-100"},"何から始めたらいいのか分からない方のため"),d(" のガイドサイトです。 釣り初心者が安心して楽しめるよう、釣具や服装の選び方、基本的な釣りの手法を丁寧に紹介しています。 また、釣りには自然を守るためのルールや他の人への配慮が不可欠です。 初めての方でも安心して釣りに出かけられるよう、ルールやマナーについても分かりやすくまとめています。 ")],-1)),e[1]||(e[1]=l("p",null,[d(" 自然と一体となる時間を楽しみながら、 "),l("span",{class:"font-semibold text-gray-100"},"初めての釣りの一歩を踏み出してみましょう。")],-1)),r(A,{site:"OtaProject2024 website",title:"Fishing Guide - How to starting fishing",text:"For all beginning fishermen.",path:"https://project.ne.senshu-u.ac.jp/2024/05/FishingGuide#/"}),e[2]||(e[2]=l("p",{class:"mt-5"}," このサイトは、Vue.jsとTailwind CSSで構築され、シンプルかつ直感的なデザインを追求しました。 Vue.jsのスムーズな動作とTailwind CSSによる柔軟なデザインにより、見やすく使いやすいインターフェースを実現しています。 ",-1)),r(A,{site:"GitHub",title:"OtaProject2024 / FishingGuide",text:"GitHub is where OtaProject2024 builds software.",path:"https://github.com/OtaProject2024/FishingGuid"})]))},q={class:"animate-part-in text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12"},V={__name:"site",setup:t=>(t,e)=>(a(),i("div",q,[e[0]||(e[0]=l("p",null,[d(" このウェブサイトはシングルページアプリケーション(SPA)の形式で構築されており、プロジェクトメンバーが制作した3Dモデルが背景に配置されています。 "),l("span",{class:"font-semibold text-gray-100"},"Three.jsを活用してモデルの描画"),d(" を行い、 "),l("span",{class:"font-semibold text-gray-100"},"デザインにはTailwind CSSを用いて美しいスタイル"),d(" を実現しています。 また、vue-gtagを使用することで、ユーザーのアクセス解析も可能です。 ")],-1)),r(A,{site:"GitHub",title:"OtaProject2024 / ProjectPage",text:"GitHub is where OtaProject2024 builds software.",path:"https://github.com/OtaProject2024/ProjectPage"}),e[1]||(e[1]=l("p",null," SPAのメリットとして、最初の読み込み後はサーバーとの通信が非同期で行われるため、ページ全体を再読み込みすることなく動的なコンテンツの更新が可能です。 これにより、ページ遷移に伴う待ち時間が大幅に短縮され、ユーザーエクスペリエンスが向上します。 ",-1))]))},Y={class:"animate-part-in text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12"},B={__name:"video",setup(t){const e=()=>m("play Video");return(t,s)=>(a(),i("div",Y,[s[0]||(s[0]=l("p",null," coming soon... ",-1)),l("video",{class:"w-full rounded-lg my-5",controls:"",src:"/2024/05/assets/videos/coming_soon.webm",onClick:e})]))}},N={class:"mt-32 flex flex-col items-center font-Default text-white"},Z={class:"flex flex-col items-center w-3/4 md:w-2/5 mt-10 mb-60"},J={class:"flex justify-between items-center text-xl w-full"},K={class:"flex flex-col items-center"},Q={class:"flex flex-col items-center"},U={class:"flex justify-between items-center text-xl w-full"},X={__name:"contents",setup(e){const s=t(null),o=t=>{let e=t.scrollTop,s=0-e,a=performance.now();const i=l=>{let o=(l-a)/700;o<1?(t.scrollTop=e+s*o,requestAnimationFrame(i)):t.scrollTop=0};requestAnimationFrame(i)},n=t("Robot"),c=()=>{"Media"===n.value&&(n.value="Robot",s&&o(s.value))},p=()=>{"Robot"===n.value&&(n.value="Media",s&&o(s.value))};return(t,e)=>(a(),i("div",{ref_key:"scrollableDiv",ref:s,class:"animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm"},[l("div",N,[e[6]||(e[6]=l("div",{class:"animate-session-in"},[l("h1",{class:"font-bold text-center text-6xl md:text-7xl"},"Contents")],-1)),l("div",Z,[l("div",J,[l("div",{class:u(["transition-opacity duration-500 ease-in-out cursor-pointer group",{"opacity-20":"Robot"===n.value}]),onClick:c},[l("p",{class:u({"duration-500 group-hover:text-white":"Media"===n.value})},[e[0]||(e[0]=d(" < ")),l("span",{class:u({"duration-500 group-hover:ml-1":"Media"===n.value})},"Robot",2)],2)],2),l("div",{class:u(["transition-opacity duration-500 ease-in-out cursor-pointer group",{"opacity-20":"Media"===n.value}]),onClick:p},[l("p",{class:u({"duration-500 group-hover:text-white":"Robot"===n.value})},[l("span",{class:u({"duration-500 group-hover:mr-1":"Robot"===n.value})},"Media",2),e[1]||(e[1]=d(" > "))],2)],2)]),x(l("div",K,[e[2]||(e[2]=l("div",{class:"animate-part-in mb-10"},[l("h2",{class:"font-medium text-center text-4xl md:text-5xl mb-4"},"Robot"),l("p",{class:"text-gray-300"}," 釣り体験用ロボットは、 クラウドベースの3D設計ソフトウェア「Autodesk Fusion」を用いた3Dモデリングと、 インタープリタ型の高水準汎用プログラミング言語「Python」による制御により実現されています。 ")],-1)),r(h,{title:"3D model"}),r(G),r(h,{title:"source code"}),r(L)],512),[[b,"Robot"===n.value]]),x(l("div",Q,[e[3]||(e[3]=l("div",{class:"animate-part-in mb-10"},[l("h2",{class:"font-medium text-center text-4xl md:text-5xl mb-4"},"Media"),l("p",{class:"text-gray-300"}," 私たちは、釣りをこれから始める方々向けのサイトをはじめ、プロジェクトの活動が広く伝わるようにWEB開発や動画制作にも力を入れてきました。 ")],-1)),r(h,{title:"Fishing Guide"}),r(W),r(h,{title:"website"}),r(V),r(h,{title:"video"}),r(B)],512),[[b,"Media"===n.value]]),l("div",U,[l("div",{class:u(["transition-opacity duration-500 ease-in-out cursor-pointer group",{"opacity-20":"Robot"===n.value}]),onClick:c},[l("p",{class:u({"duration-500 group-hover:text-white":"Media"===n.value})},[e[4]||(e[4]=d(" < ")),l("span",{class:u({"duration-500 group-hover:ml-1":"Media"===n.value})},"Robot",2)],2)],2),l("div",{class:u(["transition-opacity duration-500 ease-in-out cursor-pointer group",{"opacity-20":"Media"===n.value}]),onClick:p},[l("p",{class:u({"duration-500 group-hover:text-white":"Robot"===n.value})},[l("span",{class:u({"duration-500 group-hover:mr-1":"Robot"===n.value})},"Media",2),e[5]||(e[5]=d(" > "))],2)],2)])])])],512))}};export{X as default};
