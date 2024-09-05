import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className="section-container">
            <div className="section-page">

                <div className="image-page">
                    <div className="image-left">
                        <h1>
                            Тавимиский морской порт VISMA
                        </h1>
                        <p>    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quaerat esse earum neque, debitis totam aperiam ratione perspiciatis quae explicabo?
                        </p>
                        <div className='button'>
                            <h2>O КОМПАНИ </h2>
                            <button><Image src="/section-image/right-icon2.png" width={24} height={24} color='white' /></button>
                        </div>
                    </div>
                    <div className="image-right">

                        <div className='cards'>
                            <h3>УСЛУГИ</h3>
                            <h2>Погрузочно-разгрузочная деятелность</h2>
                        </div>
                        <div className='cards'>
                            <h3>УСЛУГИ</h3>
                            <h2>Хранение <br /> грузов</h2>
                        </div>
                        <div className='cards'>
                            <h3>УСЛУГИ</h3>
                            <h2>Складские <br /> оператции</h2>
                        </div>
                        <div className='cards'>
                            <h3>УСЛУГИ</h3>
                            <h2>Швартовые <br /> операции</h2>
                        </div>
                    </div>
                </div>

                {/* -------------------------------------------- */}

                <div className='uslugi'>
                    <div className="uslugi-left">
                        <h1>Услуги</h1>
                        <div className="pdf-parts">
                            <p>Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год</p>
                            <div className="pdf">PDF</div>
                        </div>
                        <div className="pdf-parts">
                            <p>Условия определения цены договора и тарифы на работы</p>
                            <div className="pdf">PDF</div>
                        </div>
                        <div className="pdf-parts">
                            <p>Договор перевалки (типовая форма)</p>
                            <div className="pdf">PDF</div>
                        </div>
                    </div>
                    <div className="uslugi-right">

                        <div className='uslugi-cards'>
                            <h3>УСЛУГИ</h3>
                            <h2>Хранение грузов</h2>
                        </div>
                        <div className='uslugi-cards'>
                            <h3>УСЛУГИ</h3>
                            <h2>Складские оператции</h2>
                        </div>
                        <div className='uslugi-cards'>
                            <h3>УСЛУГИ</h3>
                            <h2>Швартовые операции</h2>
                        </div>
                        <div className='uslugi-cards'>
                            <h3>УСЛУГИ</h3>
                            <h2>Погрузочно-разгрузочная деятельность</h2>
                        </div>
                        <div className='uslugi-cards'>
                            <h3>УСЛУГИ</h3>
                            <h2>Хранение грузов</h2>
                        </div>
                        <div className='uslugi-cards'>
                            <h3>УСЛУГИ</h3>
                            <h2>Складские оператции</h2>
                        </div>

                    </div>
                </div>


                {/* --------------------------------------- */}

                <div className="company">
                    <div className="left-company">
                        <h1>O компании</h1>
                        <p style={{ marginTop: '60px' }}>Tristique orci consectetur sit felis. Sed ac auctor tellus lobortis. Enim non turpis nulla nec a sapien sit amet molestie. Et id malesuada gravida sit volutpat. Volutpat sed lectus elementum diam neque facilisis in. Convallis nibh sem in viverra quis. Interdum pharetra.
                            <br /><br />Libero nunc porttitor id mi convallis ultricies convallis erat. At sagittis nisi at in diam sit.
                        </p>


                        <ul>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus. Vivamus tincidunt non lectus odio magna semper odio risus. Vivamus tincidunt non lectus odio magna semper odio risus. </li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                        </ul>

                        <p>Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh rhoncus at nisl. Duis nibh libero ut enim. Metus aliquam cursus molestie sapien risus. Suspendisse volutpat.</p>
                        <ul>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                            <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
                        </ul>

                    </div>

                    <div className="right-company">
                        <div style={{ marginTop: '220px', borderRadius: '15px', position: 'relative', width: '530px', height: '350px', backgroundImage: `url('https://cdn.pixabay.com/photo/2016/08/08/15/08/cruise-1578528_640.jpg')`, backgroundSize: 'cover' }}>
                            <iframe
                                style={{ borderRadius: '15px', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/V1A9EVNtwYs"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="zapros">
                            <p>Запрос ставки и условий погрузочно-разгрузочных работ</p>
                            <h3>Рассчитайте моментально стоимость полных портовых услуг в порту VISMA</h3>
                        </div>
                    </div>



                </div>

                {/* ----------------------------------------- */}

                <div className="novosti-main">
                    <div className="novosti">
                        <div className="novosti-top">
                            <h1 style={{ fontSize: '40px' }}>Новости</h1>
                            <div className='button-novosti'>
                                <h2 style={{color: '#3D348B', fontSize: '16px', fontWeight: '700' }}>ВСЕ НОВОСТИ </h2>
                                <button><Image src="/section-image/right-icon2.png" width={30} height={30} color='white' /></button>
                            </div>

                        </div>

                        <div className="novosti-bottom">
                            <div className="novosti-cards">
                                <img style={{ borderRadius: '20px', width: '310px', height: '215px' }} src="https://s3-alpha-sig.figma.com/img/bf97/c8df/45dd9927b263016bc5601481b14e7d89?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fd-2NYhy89K971M0nZpe0lXRuRtZ6A9BTaz3~GkMc~6vZpnQXrplsoBNjrkj21LVMWdAlEHptFc6nujZQXoClyzbZdJ0uWHAF3Nec9RueSwtN-Pgir3XIX8W72xltBD1tcJ69-Wjfy4XYoxmw2gjH0YNKnVf1yV2CL9KDgHBwoh1qNQiF74584QgCpZw~OUU12Jh-b0ObUuAegG6MVHuSFXo1KEgP4NNjnFNPwkKhmouxUlYf6Nce5li8J7fkGyF7LyfsCOBhtYu2~3cHh4hjF0UAD-oqncCm8c-mN8fCxxgcDihlMGVGvgwBYYnXIa34e5bnpNzrvFpos1f9~I~YA__" alt="" />
                                <div className="novosti-text">
                                    <h3 style={{ fontSize: '13px' }}>20/05/22</h3>
                                    <h2 style={{ fontSize: '18px', fontWeight: '700' }}>Semper eu pulvinar eget integer</h2>
                                    <p style={{ fontSize: '14px' }}>Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.</p>
                                </div>
                            </div>

                            <div className="novosti-cards">
                                <img style={{ borderRadius: '20px', width: '310px', height: '215px' }} src="https://s3-alpha-sig.figma.com/img/7f21/4021/4ad2e8b8d6eec35cf756da322d6dab85?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZJBLQjHbEKB0ISQ4Wo8LmoJ0ZnnsbMb-q9lGm6vMpaOGkg-n9pOEDoOVpdHiBopM8NPebmzNhbx4EYbKvyURCn8e9nrpyRkYf~bCYb9fMFuOdXN2kvAqsrdzpNaPuqr6VI-TSdZsJMah3mU--aYCwl7K2dssFtM9An2raL4YjMAKzr97lR6w~ZbpInSmPg2lwaRos2f8WQJOMoadKt2klPV3QaA5Q-mfbONuzw9NptE~7rpfsvOiCgS23ja~UPA5zY5Gktbp43f4bWatv2JjEcLAAF6FTqlOs3iptODWmM-2RnVjtTDlpiBHEN4OJZLD9gnt0E9pBWIhxSjLivkMCw__" alt="" />
                                <div className="novosti-text">
                                    <h3 style={{ fontSize: '13px' }}>20/02/22</h3>
                                    <h2 style={{ fontSize: '18px', fontWeight: '700' }}>Vitae id nec nulla sit nunc cursus curabitur tempus vel enim.</h2>
                                    <p style={{ fontSize: '14px' }}>Cras arcu ac commodo suspendisse commodo ipsum turpis dui. Quis pharetra malesuada eget sit egestas et integer. Suspendisse a.</p>
                                </div>
                            </div>

                            <div className="novosti-cards">
                                <img style={{ borderRadius: '20px', width: '310px', height: '215px' }} src="https://s3-alpha-sig.figma.com/img/5c90/aeda/4397d4f80ab287453227ebf58027c6cb?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nbtr0rEc6GB5sjRK8DDdKnJk2PwGU4m~QB4FyeIM8JDgUyhNuh2HAGVn4vmvKyfqbSjkTehiPcXOTwXg5GHHgKEIKvZwYkEDU-OMmAN0NUaXk6sTlmxn6oyh2vUpQ530otemS6s7-X~D2siSUqeWBZ~IBPVUsbcXwnriQgBue0ELF22gL0n9wmP-06jlzzfAkD~DdRBGJMcjyCixDiGDblq8kt2iSALCPaAg-aO9ih8-4BNHnzdBeEhwww5YVzjSyFqZvAeNvmL25F-HD8YDGRyCMHw2zrkzWHJutj~SU6-OZza3lE-GuWT57o3KfbYmVRWgWc326jtAa3IeIG~BFQ__" alt="" />
                                <div className="novosti-text">
                                    <h3 style={{ fontSize: '13px' }}>30/12/21</h3>
                                    <h2 style={{ fontSize: '18px', fontWeight: '700' }}>Integer nisi sagittis in aliquet. Enim eget varius lacinia est a.</h2>
                                    <p style={{ fontSize: '14px' }}>Lectus tempus felis pretium vitae. Tempor massa vestibulum condimentum cursus diam quam. Mattis facilisi dignissim donec eget vel.</p>
                                </div>
                            </div>


                            <div className="novosti-cards">
                                <img style={{ borderRadius: '20px', width: '310px', height: '215px' }} src="https://s3-alpha-sig.figma.com/img/6fe1/6ff7/15d6b1d3d02d6a7eb1e3874cef1c77ce?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K6cHhkUbewQiyW2Q36cfRKDS3xqqMERVLVEXC6w2qxcSUrgCc2gI7zFatAjC7NAnmugTkmlvIzqsQlLtXuyA6Hvp5HdNrVXNWl5oEcis9EjRLB37MjZ02GAIj~pFNOPvUhrH3eVlhXk9LUuASuMo6NKXqXnjsESz4kNQUj445sMfyupY66KM2UgcD-8UvwCzQAoU2Z3KFu6YZF4H68rmveU3JW-uv0uDMY0SW-h9eNOm0iDp3c7YveUMViB4G3GkZDkjR8fARw528Pj-MdTVz8bQZUFFF2ZGuHqCKcnv1iSPCS-11vHc4jn3oJnKpSqRYG7a4nnAnwWqHs7ZH6Dt6g__" alt="" />
                                <div className="novosti-text">
                                    <h3 style={{ fontSize: '13px' }}>29/06/21</h3>
                                    <h2 style={{ fontSize: '18px', fontWeight: '700' }}>Facilisis vitae proin quis</h2>
                                    <p style={{ fontSize: '14px' }}>Iaculis diam quam velit sit nunc turpis ultricies elementum. Vitae lacinia tristique rutrum faucibus nulla quis ultricies. Risus.</p>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}
