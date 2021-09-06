import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronDownIcon,
  CogIcon,
  ColorSwatchIcon,
  InboxIcon,
  MicrophoneIcon,
  PuzzleIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import {
  DownloadIcon,
  HashtagIcon,
  PlusIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import {
  IconBellOff,
  IconBellRinging,
  IconCardboards,
  IconHeadphones,
  IconPin,
} from '@tabler/icons'

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Head>
        <title>メインページ</title>
      </Head>

      <nav className="flex-none flex flex-col min-h-screen h-screen w-20 py-2 bg-trueGray-900">
        <div className="overflow-y-auto text-sm">
          <ul className="text-center">
            <li className="group relative cursor-pointer">
              <div
                className="absolute top-0 left-0 flex items-center w-2 h-12"
                aria-hidden="true"
              >
                <span className="w-2 h-4 -ml-1 rounded transform transition group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
              </div>
              <a
                href="#"
                className="flex justify-center items-center mx-auto w-12 h-12 text-trueGray-200 bg-trueGray-800 rounded-full transform-gpu transition-all ease-linear group-hover:text-white group-hover:bg-indigo-500 group-hover:rounded-2xl"
                aria-label="ホーム"
              >
                <PuzzleIcon
                  className="mx-auto rounded-full"
                  width={32}
                  height={32}
                />
              </a>
            </li>
          </ul>
          <hr className="mx-4 mt-3 border-b border-trueGray-700"></hr>
          <ul aria-label="サーバー">
            <li className="group relative mt-3 cursor-pointer">
              <div
                className="absolute top-0 left-0 flex items-center w-2 h-12"
                aria-hidden="true"
              >
                <span className="w-2 h-4 -ml-1 rounded transform transition group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
              </div>
              <a
                className="flex justify-center items-center"
                href="#"
                aria-label="テストサーバー1"
              >
                <Image
                  className="rounded-full"
                  src="/dan-asaki-wC_YNVgIRdA-unsplash.jpg"
                  alt="laravel"
                  width={48}
                  height={48}
                />
              </a>
            </li>
            <li className="group relative mt-3 cursor-pointer">
              <div
                className="absolute top-0 left-0 flex items-center w-2 h-12"
                aria-hidden="true"
              >
                <span className="w-2 h-4 -ml-1 rounded transform transition group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
              </div>
              <a href="#" aria-label="テストサーバー2">
                <ColorSwatchIcon
                  className="mx-auto rounded-full text-yellow-500"
                  width={48}
                  height={48}
                />
              </a>
            </li>
            <li className="relative mt-3 cursor-pointer">
              <div
                className="absolute top-0 left-0 flex items-center w-2 h-12"
                aria-hidden="true"
              >
                <span className="w-2 h-10 -ml-1 bg-white rounded"></span>
              </div>
              <a
                className="flex justify-center items-center"
                href="#"
                aria-label="テストサーバー3"
              >
                <Image
                  className="rounded-full"
                  src="/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67.png"
                  alt="JavaScript"
                  width={48}
                  height={48}
                />
              </a>
            </li>
          </ul>
          <ul>
            <li className="group relative mt-3 cursor-pointer">
              <div
                className="absolute top-0 left-0 flex items-center w-2 h-12"
                aria-hidden="true"
              >
                <span className="w-2 h-4 -ml-1 rounded transform transition group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
              </div>
              <a
                className="flex justify-center items-center mx-auto w-12 h-12 text-teal-500 bg-trueGray-800 rounded-full transform-gpu transition-all ease-linear group-hover:text-white group-hover:bg-teal-500 group-hover:rounded-2xl"
                href="#"
                aria-label="サーバーを追加"
              >
                <PlusIcon width={24} height={24} />
              </a>
            </li>
            <li className="group relative mt-3 cursor-pointer">
              <div
                className="absolute top-0 left-0 flex items-center w-2 h-12"
                aria-hidden="true"
              >
                <span className="w-2 h-4 -ml-1 rounded transform transition group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
              </div>
              <a
                className="flex justify-center items-center mx-auto w-12 h-12 text-teal-500 bg-trueGray-800 rounded-full transform-gpu transition-all ease-linear group-hover:text-white group-hover:bg-teal-500 group-hover:rounded-2xl"
                href="#"
                aria-label="公開サーバーを探す"
              >
                <SearchIcon width={24} height={24} />
              </a>
            </li>
          </ul>
          <hr className="mx-4 mt-3 border-b border-trueGray-700"></hr>
          <ul>
            <li className="group relative mt-3 cursor-pointer">
              <div
                className="absolute top-0 left-0 flex items-center w-2 h-12"
                aria-hidden="true"
              >
                <span className="w-2 h-4 -ml-1 rounded transform transition group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
              </div>
              <a
                className="flex justify-center items-center mx-auto w-12 h-12 text-teal-500 bg-trueGray-800 rounded-full transform-gpu transition-all ease-linear group-hover:text-white group-hover:bg-teal-500 group-hover:rounded-2xl"
                href="#"
                aria-label="アプリをダウンロード"
              >
                <DownloadIcon width={24} height={24} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col min-h-screen h-screen">
        <section
          className="flex h-12 text-white"
          aria-label="チャンネルのヘッダー"
        >
          <div className="flex-none flex justify-between items-center w-56 px-3 py-2 bg-trueGray-800 border-b border-trueGray-900">
            <div>Tailwind CSS</div>
            <span>
              <ChevronDownIcon width={20} height={20} />
            </span>
          </div>
          <div className="flex-1 flex justify-between items-center px-4 bg-trueGray-750 border-b border-trueGray-900">
            <div className="flex items-center">
              <div className="text-2xl text-trueGray-500">#</div>
              <div className="ml-2 text-sm">general</div>
              <div className="pl-3 ml-3 text-xs text-trueGray-400 border-l border-trueGray-400 ">
                general discussion of Tailwind CSS
              </div>
            </div>
            <div className="flex items-center text-trueGray-300">
              <button
                className="ml-4"
                aria-label={`チャンネル${'一般'}をミュートする`}
                aria-pressed="false"
              >
                <IconBellRinging fill="currentColor" size={24} />
              </button>
              <button
                className="ml-4"
                aria-label="ピン留めされたメッセージ"
                aria-pressed="false"
              >
                <IconPin fill="currentColor" size={26} />
              </button>
              <button
                className="ml-4 text-white"
                aria-label="メンバーリスト"
                aria-pressed="true"
              >
                <UsersIcon width={24} height={24} />
              </button>
              <form className="relative ml-4" role="search">
                <input
                  className="px-2 py-1 text-sm text-trueGray-200 bg-trueGray-900 rounded "
                  type="search"
                  placeholder="検索"
                  size={20}
                  aria-label="検索"
                />
                <span className="absolute top-1 right-0 mr-1">
                  <SearchIcon width={20} height={20} />
                </span>
              </form>
              <button
                className="ml-4"
                aria-label="受信ボックス"
                aria-pressed="false"
              >
                <InboxIcon width={24} height={24} />
              </button>
              <a className="ml-4" href="#" aria-label="ヘルプ">
                <QuestionMarkCircleIcon width={24} height={24} />
              </a>
            </div>
          </div>
        </section>
        <div className="flex-1 flex overflow-y-hidden">
          <aside className="flex-none flex flex-col justify-between w-56 bg-trueGray-800">
            <div className="overflow-y-auto">
              <div className="mt-4 mb-5">
                <button className="group flex items-center w-full mb-1 text-trueGray-400 hover:text-trueGray-200">
                  <ChevronDownIcon width={20} height={20} />
                  <h3 className="text-sm font-semibold tracking-wide uppercase">
                    一般
                  </h3>
                </button>
                <ul className="px-2">
                  <li className="group px-2 py-1 text-trueGray-400 rounded hover:bg-trueGray-750">
                    <a href="#" className="flex items-center">
                      <HashtagIcon
                        className="text-trueGray-500"
                        width={24}
                        height={24}
                        aria-label="公開チャンネル"
                      />
                      <span className="ml-2 group-hover:text-trueGray-200">
                        welcome
                      </span>
                    </a>
                  </li>
                  <li className="group px-2 py-1 text-trueGray-400 rounded hover:bg-trueGray-750">
                    <a href="#" className="flex items-center">
                      <HashtagIcon
                        className="text-trueGray-500"
                        width={24}
                        height={24}
                        aria-label="公開チャンネル"
                      />
                      <span className="ml-2 group-hover:text-trueGray-200">
                        faq
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4 mb-5">
                <button className="group flex items-center w-full mb-1 text-trueGray-400 hover:text-trueGray-200">
                  <ChevronDownIcon width={20} height={20} />
                  <h3 className="text-xs font-semibold tracking-wide uppercase">
                    Tailwind CSS
                  </h3>
                </button>
                <ul className="px-2">
                  <li className="group px-2 py-1 text-trueGray-400 rounded hover:bg-trueGray-750">
                    <a href="#" className="flex items-center">
                      <HashtagIcon
                        className="text-trueGray-500"
                        width={24}
                        height={24}
                        aria-label="公開チャンネル"
                      />
                      <span className="ml-2 group-hover:text-trueGray-200">
                        general
                      </span>
                    </a>
                  </li>
                  <li className="group px-2 py-1 text-trueGray-400 bg-trueGray-700 rounded">
                    <a href="#" className="flex items-center">
                      <HashtagIcon
                        className="text-trueGray-500"
                        width={24}
                        height={24}
                        aria-label="公開チャンネル"
                      />
                      <span className="ml-2 text-trueGray-100">core-dev</span>
                    </a>
                  </li>
                  <li className="group px-2 py-1 text-trueGray-400 rounded hover:bg-trueGray-750">
                    <a href="#" className="flex items-center">
                      <HashtagIcon
                        className="text-trueGray-500"
                        width={24}
                        height={24}
                        aria-label="公開チャンネル"
                      />
                      <span className="ml-2 group-hover:text-trueGray-200">
                        course
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <section
              className="flex justify-between items-center px-2 py-2 bg-trueGray-850"
              aria-label="ユーザーエリア"
            >
              <div className="flex items-center">
                <button>
                  <section aria-label="miyashita、 オンライン">
                    <Image
                      className="rounded-full"
                      src="/crop.jpg"
                      alt="avatar"
                      width={32}
                      height={32}
                    />
                  </section>
                </button>
                <div className="ml-2">
                  <div className="text-sm font-semibold text-white">
                    miyashita
                  </div>
                  <div className="text-xs font-medium text-gray-400">#1429</div>
                </div>
              </div>
              <div className="flex items-center text-gray-400">
                <button
                  className="px-1 py-2 rounded hover:text-gray-300 hover:bg-trueGray-750"
                  aria-label="ミュート"
                >
                  <MicrophoneIcon
                    className="mx-auto rounded-full"
                    width={18}
                    height={18}
                  />
                </button>
                <button
                  className="px-1 py-2 rounded hover:text-gray-300 hover:bg-trueGray-750"
                  aria-label="スピーカーミュート"
                >
                  <IconHeadphones className="mx-auto rounded-full" size={20} />
                </button>
                <button
                  className="px-1 py-2 rounded hover:text-gray-300 hover:bg-trueGray-750"
                  aria-label="ユーザー設定"
                >
                  <CogIcon
                    className="mx-auto rounded-full"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </section>
          </aside>
          <div className="flex-1 flex justify-between">
            <main
              className="flex-1 bg-trueGray-750 flex flex-col justify-between"
              aria-label="一般 (チャンネル)"
            >
              <div className="overflow-y-auto">
                Display chat contents Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quod aliquid suscipit labore vero quisquam?
                Dolorem quibusdam labore debitis, itaque eveniet quam natus
                exercitationem cum eum, cupiditate harum. Incidunt, natus
                adipisci eaque officia error, maxime minus tenetur excepturi
                neque ipsam eum perferendis iure nostrum earum unde iusto ipsum.
                Earum facilis qui nostrum quas odio repudiandae, quos
                perspiciatis amet repellat tenetur culpa quidem, accusamus
                illum. Laudantium deleniti mollitia illo, deserunt libero cum
                atque aliquid ratione corrupti beatae eos fugit laborum
                temporibus fugiat itaque nulla reprehenderit perferendis magnam
                unde optio nemo! Neque libero culpa nihil blanditiis, laborum
                eveniet dolorem cupiditate, temporibus cumque nesciunt eligendi
                optio! Cumque eligendi architecto sit voluptates nemo, illum
                corrupti fuga alias? Veritatis ipsam optio amet explicabo autem
                nihil! Eos vel reprehenderit culpa voluptas in reiciendis quod
                quidem et quos unde! Sit dignissimos neque provident tenetur
                repudiandae ipsa minima ducimus eos esse? Consequatur
                accusantium dicta, dolores ipsum corporis iusto voluptate
                laborum, maiores iste similique tempora magni quibusdam quasi
                animi, repudiandae accusamus nisi vero praesentium id! Possimus
                earum ratione eius molestias, soluta odit accusamus, nihil quas
                vitae voluptatibus cumque! Maxime accusantium provident aut
                corrupti. Odio, itaque fugiat doloremque dicta iure ea ducimus
                voluptate voluptates, cupiditate ad minus nisi error delectus
                quaerat sit et modi tempora? Totam repudiandae voluptatibus vero
                reiciendis earum architecto sunt aliquid rem. Excepturi
                quibusdam sunt mollitia tempore. Ad, laborum saepe rem mollitia
                ipsa nostrum vitae ea id non dolorum repellendus quos culpa
                minima voluptas! Voluptate ducimus maxime corporis debitis
                eligendi consequuntur quo enim nihil consectetur velit eos
                excepturi vitae, incidunt perferendis nisi iure, facilis non
                consequatur libero reprehenderit alias illo porro repellat
                voluptatum? Atque architecto explicabo aliquam est et nulla hic
                veritatis quasi corrupti facilis, corporis quidem quae ullam
                odit sit sint pariatur molestias temporibus. Vitae esse
                voluptates itaque, laboriosam tempora vel laudantium
                exercitationem cum laborum totam quia doloremque placeat sequi,
                ut nobis tenetur aperiam quisquam? Assumenda beatae eveniet
                quisquam, facere est similique vero aspernatur quia quod
                repellat magnam soluta modi aliquam aliquid asperiores cumque!
                Aut, quo! Itaque, hic iure tempore rerum quia quis delectus
                consequatur possimus fugiat distinctio, repudiandae eligendi
                quibusdam corporis molestiae quidem eius iste, assumenda
                repellat a aliquam labore. Error quo fuga, obcaecati ipsam
                officiis tempora nisi necessitatibus, deserunt voluptas libero
                maiores perspiciatis iure ea cum vero numquam nulla magnam
                expedita aperiam neque at hic, optio ullam. Aut rem ratione
                harum. Vitae distinctio odit ea fugiat. Ab, voluptates
                consequatur. Tempora quidem consequuntur, facilis voluptatibus
                excepturi sint reprehenderit facere, officia delectus rem, ipsa
                at quisquam. Tempora reprehenderit consequuntur sit provident
                doloremque laboriosam sed fugiat, eum laudantium! Cum blanditiis
                explicabo esse odio ex voluptates fugiat quaerat, obcaecati,
                numquam ipsa sequi, tempore hic qui odit animi eum quod. Quaerat
                vitae doloribus maiores in sequi corrupti at. Voluptatibus
                laborum est, ab voluptate eos quo perferendis nesciunt, quia
                eveniet quod, deleniti blanditiis ullam illum. In ut suscipit
                dignissimos veniam doloribus eum deleniti atque amet architecto
                ullam vero corrupti quis nihil tenetur qui porro dolor, quos
                debitis ipsam beatae incidunt deserunt pariatur! Illo
                voluptatibus placeat ipsa doloribus quia velit, in animi
                exercitationem dignissimos odit atque cumque, architecto totam
                corporis? Cum similique tempora dolor maiores quibusdam vitae
                corporis voluptas hic minus nesciunt velit iste ipsam,
                blanditiis iure laborum! Esse, facilis at placeat voluptatibus
                repellat, adipisci accusantium maxime maiores asperiores
                repellendus dolorem? Architecto, corporis, in voluptatum
                asperiores accusantium incidunt reiciendis id optio a dolore,
                veniam iusto earum. Eveniet qui ipsa ad nostrum sit harum, sunt
                aspernatur totam eos, blanditiis vero tempora? Provident cum
                perspiciatis architecto voluptate voluptatem molestias hic
                voluptas, deserunt sit repellendus odit doloremque voluptatibus,
                nulla eius excepturi! Voluptas rerum animi blanditiis quas
                commodi cumque quia recusandae deleniti numquam qui sint
                accusamus mollitia magni deserunt, et est tempore reprehenderit
                tempora. Ipsum quisquam voluptates accusamus amet voluptas atque
                quas suscipit, eaque doloribus obcaecati consequuntur aliquid.
                Distinctio odit ea id provident impedit vitae dolorum
                accusantium est sunt error nam, consequuntur veritatis modi
                officia dolore reprehenderit tempore. Ex aliquam velit amet
                tempora ea veritatis eaque error quod aperiam expedita ut cumque
                dicta eum pariatur minima deleniti odit, odio quibusdam
                repudiandae itaque excepturi distinctio fugit fuga doloribus.
                Deserunt, sapiente! Perspiciatis quisquam voluptatem, suscipit
                consequatur illum dolorum animi doloremque facere tempore
                aspernatur autem, tenetur ab modi quis error ea. Praesentium
                tenetur, dolorum numquam sed non tempora cum maxime perferendis
                veniam dolorem ab ipsum architecto autem ut enim. Deserunt non
                corporis adipisci voluptates vel ab, ratione explicabo quis sint
                unde, ipsum voluptas nesciunt ullam veniam, perferendis
                excepturi minima! Repudiandae eos alias aut, aliquam vel animi
                deleniti unde molestiae minus officiis et facere, vitae expedita
                reprehenderit autem quasi voluptatibus quisquam? Fugit molestias
                accusamus, quod atque qui soluta voluptas, aspernatur provident
                non necessitatibus veniam blanditiis totam nobis assumenda
                ducimus similique sapiente at eos voluptatem sed, dolore alias
                iusto. In similique expedita delectus quidem sit debitis minus
                reiciendis quisquam repudiandae tenetur, error excepturi fugit
                vitae sunt molestias natus doloribus, qui dolorum nostrum
                tempora aliquam ratione! Consequatur quos repellendus error sed
                optio rerum tempore modi libero ratione doloremque earum
                quisquam itaque voluptatum repellat voluptas blanditiis alias
                doloribus, officia autem numquam. Nihil eveniet reiciendis,
                repudiandae vitae eius doloribus qui veniam, voluptates nulla
                optio in placeat dolore esse quos neque perferendis
                exercitationem repellat veritatis at molestias. Deserunt
                voluptate expedita rem pariatur autem. Quia, ad molestiae!
                Reprehenderit sapiente impedit voluptates cumque, omnis
                molestias id, neque, rem tempore in modi perspiciatis
                accusantium? Pariatur nihil amet ipsa. Suscipit doloremque
                temporibus, assumenda vero quos, commodi officiis minima dolorem
                libero placeat optio? Porro at exercitationem illum vel animi
                dolorum magni id ipsum incidunt libero consectetur qui optio
                amet numquam, quod quo, repellendus quas eaque eveniet fugiat
                nostrum, eligendi magnam minima. Sit culpa molestiae esse,
                molestias eos dolorem sunt reprehenderit laboriosam nihil sequi
                libero qui explicabo facere illum nobis, quos praesentium nam
                asperiores atque. Amet quaerat itaque nostrum aut ullam
                perspiciatis pariatur ab! Unde natus tempora cum aliquid numquam
                vitae blanditiis nulla iste laudantium eos, modi animi.
                Blanditiis, possimus. Rerum repellendus neque animi ex
                blanditiis mollitia alias cupiditate deleniti eaque optio rem
                dignissimos possimus impedit odit, expedita nesciunt
                necessitatibus distinctio ratione laborum magnam, eos ipsum
                nobis? Voluptatibus unde hic nemo, expedita nobis corrupti
                impedit, dolor quas soluta quis, itaque error quidem eos
                repellat nisi dolorem iure magni reiciendis animi veritatis?
                Culpa optio, rerum placeat blanditiis commodi dolores dolorem
                eaque maiores. Sed blanditiis ipsum debitis odio, veritatis
                ullam nulla? Quos dolorum ducimus molestiae quod quis officia
                quidem assumenda obcaecati sunt et minus laudantium soluta culpa
                vel molestias doloremque velit expedita, non nam eligendi, cum,
                esse natus quasi maiores! Similique sequi quaerat sit aspernatur
                maxime modi quibusdam, quos dolorem nesciunt, accusantium ipsam
                corporis harum non assumenda. Quia enim, dignissimos ea fuga
                repudiandae numquam! Atque, nam saepe facilis et nihil aperiam
                fuga dolores quis maiores, facere praesentium vero ipsum quam
                officiis delectus sunt, tenetur quos sed qui commodi. Ad maxime
                exercitationem sunt tenetur ea esse rerum iusto pariatur
                architecto in aut voluptatem, quos dicta sapiente unde quis
                eveniet eligendi facere obcaecati voluptate accusantium. Fugiat
                blanditiis est error quis dicta vero doloribus nobis voluptate
                ratione dolorem quia, esse molestiae illo nihil temporibus velit
                labore sequi dolor nulla modi repellendus! Provident, ab?
                Reiciendis nemo vitae ipsa, maxime fuga velit quisquam magni. A
                vitae error dolorum tempora. Doloremque quod praesentium et
                doloribus. Aut, cupiditate fugit alias ut quaerat eveniet natus
                harum voluptatibus cum molestias earum obcaecati.
              </div>
              <div className="bg-trueGray-700">Chat input here</div>
            </main>

            <div className="bg-indigo-500 w-56 flex-none overflow-y-auto">
              Users sidebar Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Officiis consectetur quod natus facere sapiente, maiores
              omnis, eaque nobis rerum nesciunt culpa odio nulla commodi
              delectus laudantium ipsa incidunt iusto unde totam eos doloribus?
              Consequuntur quos nam nulla cumque sapiente aperiam tenetur alias
              totam, impedit nisi quia tempora, itaque sed atque dolor esse aut
              illo magni ab eaque illum fuga numquam sit. Repudiandae molestias
              deserunt ratione. Numquam odit modi quia sint excepturi laudantium
              deleniti beatae corporis autem aut aliquid et quas, debitis, id
              vero nihil architecto quod eum, impedit repellat ipsam aperiam. Et
              numquam impedit modi eos libero? Ut quibusdam culpa voluptates
              ratione. Voluptates iure exercitationem, at praesentium quidem
              provident maxime tempora repudiandae delectus. Dolores distinctio
              nihil quisquam, incidunt praesentium et ad, explicabo quasi a sit
              perspiciatis sequi voluptatum molestiae quam nam culpa inventore
              esse hic recusandae saepe cumque quis odit vero! Sed officiis,
              necessitatibus explicabo voluptatum amet voluptatem deserunt unde
              inventore. Possimus, ab qui nihil molestiae architecto quia
              temporibus, ipsam beatae ratione ducimus magni autem aliquid
              vitae, neque dignissimos quisquam maiores dicta et! Tenetur quo
              eum deleniti beatae debitis cupiditate quod ducimus voluptas porro
              mollitia? Odio ad saepe labore consectetur, nemo quas est? Fuga
              consequuntur pariatur sequi veniam impedit rerum?
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
