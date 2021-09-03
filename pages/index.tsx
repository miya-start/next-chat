import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronDownIcon,
  ColorSwatchIcon,
  InboxIcon,
  PuzzleIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import { DownloadIcon, PlusIcon, SearchIcon } from '@heroicons/react/outline'
import { IconBellOff, IconBellRinging, IconPin } from '@tabler/icons'

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Head>
        <title>メインページ</title>
      </Head>

      <nav className="flex-none flex flex-col min-h-screen h-screen w-20 p-2 bg-gray-900">
        <div className="overflow-y-auto">
          <ul className="text-center">
            <li>
              <a
                href="#"
                className="flex justify-center items-center mx-auto w-12 h-12 text-gray-200 hover:text-white bg-gray-800 hover:bg-indigo-500 rounded-full hover:rounded-2xl transition-all"
                aria-label="ホーム"
              >
                <PuzzleIcon className="h-8 w-8 mx-auto rounded-full" />
              </a>
            </li>
          </ul>
          <hr className="mx-4 mt-3 border-b border-gray-700"></hr>
          <ul aria-label="サーバー">
            <li className="mt-3">
              <a href="#" aria-label="テストサーバー１">
                <ColorSwatchIcon className="h-12 w-12 mx-auto rounded-full text-red-400" />
              </a>
            </li>
            <li className="mt-3">
              <a
                className="flex justify-center items-center"
                href="#"
                aria-label="テストサーバー２"
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
          </ul>
          <ul>
            <li className="mt-3">
              <a
                className="flex justify-center items-center mx-auto w-12 h-12 text-teal-500 hover:text-white bg-gray-800 hover:bg-teal-500 rounded-full hover:rounded-2xl transition-all"
                href="#"
                aria-label="サーバーを追加"
              >
                <PlusIcon className="w-6 h-6" />
              </a>
            </li>
            <li className="mt-3">
              <a
                className="flex justify-center items-center mx-auto w-12 h-12 text-teal-500 hover:text-white bg-gray-800 hover:bg-teal-500 rounded-full hover:rounded-2xl transition-all"
                href="#"
                aria-label="公開サーバーを探す"
              >
                <SearchIcon className="w-6 h-6" />
              </a>
            </li>
          </ul>
          <hr className="mx-4 mt-3 border-b border-gray-700"></hr>
          <ul>
            <li className="mt-3">
              <a
                className="flex justify-center items-center mx-auto w-12 h-12 text-teal-500 hover:text-white bg-gray-800 hover:bg-teal-500 rounded-full hover:rounded-2xl transition-all"
                href="#"
                aria-label="アプリをダウンロード"
              >
                <DownloadIcon className="w-6 h-6" />
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
          <div className="flex-none flex justify-between items-center w-56 bg-gray-800">
            <div>Tailwind CSS</div>
            <span>
              <ChevronDownIcon className="h-5 w-5" />
            </span>
          </div>
          <div className="flex-1 flex justify-between items-center px-4 bg-gray-750">
            <div className="flex items-center">
              <div className="text-2xl text-gray-500">#</div>
              <div className="ml-2 text-sm">general</div>
              <div className="pl-3 ml-3 text-xs text-gray-400 border-l border-gray-400 ">
                general discussion of Tailwind CSS
              </div>
            </div>
            <div className="flex items-center text-gray-300">
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
                  className="px-2 py-1 text-sm text-gray-200 bg-gray-900 rounded "
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
        <div className="flex-1 bg-blue-500 flex overflow-y-hidden">
          <aside className="bg-green-300 w-56 flex-none flex flex-col justify-between">
            <div className="overflow-y-auto">
              Hashtag sidebar
              親譲りの無鉄砲で小供の時から損ばかりして居る。小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇(むやみ)をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出して居たら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃(はや)したからである。小使に負(お)ぶさって帰って来た時、おやじが大きな眼をして二階位から飛び降りて腰を抜かす奴があるかと云ったから、此次(このつぎ)は抜かさずに飛んで見せますと答えた。
              　親類の者から西洋製のナイフを貰って奇麗な刃を日に翳(かざ)して、友達に見せて居たら、一人が光る事は光るが切れそうもないと云った。切れぬ事があるか、何でも切って見せると受け合った。そんなら君の指を切ってみろと注文したから、何だ指位此(この)通りだと右の手の親指の甲をはすに切り込んだ。幸(さいわい)ナイフが小さいのと、親指の骨が堅かったので、今だに親指は手に付いて居る。然し創痕(きずあと)は死ぬ迄消えぬ。
              　庭を東へ二十歩に行き尽すと、南上がりに聊(いささ)か許(ばか)りの菜園があって、真中に栗の木が一本立って居る。是(こ)れは命より大事な栗だ。実の熟する時分は起き抜けに脊戸(せど)を出て落ちた奴を拾ってきて、学校で食う。菜園の西側が山城屋(やましろや)と云う質屋の庭続きで、
            </div>
            <div className="bg-gray-500">Bottom</div>
          </aside>
          <div className="flex-1 bg-green-500 flex justify-between">
            <main
              className="flex-1 bg-indigo-300 flex flex-col justify-between"
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
              <div className="bg-gray-700">Chat input here</div>
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
