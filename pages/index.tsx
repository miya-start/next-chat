import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  AtSymbolIcon,
  ChevronDownIcon,
  CogIcon,
  EmojiHappyIcon,
  InboxIcon,
  MicrophoneIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  UserAddIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import {
  ChatAlt2Icon,
  DownloadIcon,
  HashtagIcon,
  PlusIcon,
  SearchIcon,
  BookmarkIcon,
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
    <div className="grid grid-cols-[5rem,14rem,1fr] ">
      <Head>
        <title>チャットサービスのモックアップ</title>
      </Head>

      <nav
        className="grid content-between h-screen min-h-screen w-20 py-2 overflow-y-auto text-sm bg-trueGray-900"
        aria-label="サイドバー"
      >
        <ul aria-label="機能の一覧">
          <li className="group relative mt-3 cursor-pointer">
            <div
              className="absolute top-0 left-0 flex items-center w-2 h-12"
              aria-hidden="true"
            >
              <span className="w-2 h-10 -ml-1 bg-white rounded"></span>
            </div>
            <a href="#" aria-label="チャンネル">
              <ChatAlt2Icon
                className="mx-auto text-gray-100"
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
              <span className="w-2 h-4 -ml-1 rounded transition-transform group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
            </div>
            <a href="#" aria-label="検索">
              <SearchIcon
                className="mx-auto text-gray-400 ease-out group-hover:text-white group-hover:scale-105 group-hover:duration-300"
                width={44}
                height={44}
              />
            </a>
          </li>
          <li className="group relative mt-3 cursor-pointer">
            <div
              className="absolute top-0 left-0 flex items-center w-2 h-12"
              aria-hidden="true"
            >
              <span className="w-2 h-4 -ml-1 rounded transition-transform group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
            </div>
            <a href="#" aria-label="ブックマーク">
              <BookmarkIcon
                className="mx-auto text-gray-400 ease-out group-hover:text-white group-hover:scale-105 group-hover:duration-300"
                width={44}
                height={44}
              />
            </a>
          </li>
          <li className="group relative mt-3 cursor-pointer">
            <div
              className="absolute top-0 left-0 flex items-center w-2 h-12"
              aria-hidden="true"
            >
              <span className="w-2 h-4 -ml-1 rounded transition-transform group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
            </div>
            <a href="#" aria-label="ダイレクトメッセージ">
              <UsersIcon
                className="mx-auto text-gray-400 ease-out group-hover:text-white group-hover:scale-105 group-hover:duration-300"
                width={44}
                height={44}
              />
            </a>
          </li>
        </ul>

        <div className="group relative mt-6 cursor-pointer">
          <div
            className="absolute top-0 left-0 flex items-center w-2 h-12"
            aria-hidden="true"
          >
            <span className="w-2 h-4 -ml-1 rounded transition-transform group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
          </div>
          <button
            className="flex justify-center items-center w-full"
            aria-label="ユーザー設定"
          >
            <Image
              className="rounded-full transition-transform ease-out group-hover:rounded-2xl group-hover:scale-105 group-hover:duration-300"
              src="/crop.jpg"
              alt={`${'miya-start'}のアイコン`}
              width={48}
              height={48}
            />
            <i
              className="absolute right-3 bottom-0 w-4 h-4 bg-sky-600 border-trueGray-850 border-2 rounded-full"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </nav>

      <nav
        className="grid grid-rows-[3rem,1fr] h-screen min-h-screen"
        aria-label="チャンネル一覧"
      >
        <div className="flex justify-between items-center px-3 py-2 text-white bg-trueGray-800 border-b border-trueGray-900">
          <h1>JavaScript</h1>
          <span>
            <ChevronDownIcon width={20} height={20} />
          </span>
        </div>
        <div className="grid content-between w-56 overflow-y-hidden bg-trueGray-800">
          <div className="scrollbar mt-1 mr-1 overflow-y-auto">
            <div className="mt-4 mb-5">
              <div className="group flex justify-between items-center pr-3 text-trueGray-400 cursor-pointer">
                <button className="group flex items-center w-full mb-1 group-hover:text-trueGray-200">
                  <ChevronDownIcon width={16} height={16} />
                  <h2 className="text-xs font-semibold tracking-wide uppercase">
                    general
                  </h2>
                </button>
                <button
                  className="hover:text-trueGray-200"
                  aria-label="チャンネルを作成"
                >
                  <PlusIcon width={18} height={18} />
                </button>
              </div>
              <ul className="px-2">
                <li className="group px-2 py-1 text-trueGray-400 rounded hover:bg-trueGray-750 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center gap-x-1.5">
                      <HashtagIcon
                        className="text-trueGray-500"
                        width={24}
                        height={24}
                        aria-label="公開チャンネル"
                      />
                      <span>welcome</span>
                    </a>
                    <div className="hidden gap-x-1 group-hover:flex">
                      <button aria-label="招待を作成">
                        <UserAddIcon width={16} height={16} />
                      </button>
                      <button aria-label="チャンネルの編集">
                        <CogIcon width={16} height={16} />
                      </button>
                    </div>
                  </div>
                </li>
                <li className="group px-2 py-1 text-trueGray-400 rounded hover:bg-trueGray-750 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center gap-x-1.5">
                      <HashtagIcon
                        className="text-trueGray-500"
                        width={24}
                        height={24}
                        aria-label="公開チャンネル"
                      />
                      <span>faq</span>
                    </a>
                    <div className="hidden gap-x-1 group-hover:flex">
                      <button aria-label="招待を作成">
                        <UserAddIcon width={16} height={16} />
                      </button>
                      <button aria-label="チャンネルの編集">
                        <CogIcon width={16} height={16} />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-4 mb-5">
              <div className="group flex justify-between items-center pr-3 text-trueGray-400 cursor-pointer">
                <button className="group flex items-center w-full mb-1 group-hover:text-trueGray-200">
                  <ChevronDownIcon width={16} height={16} />
                  <h2 className="text-xs font-semibold tracking-wide uppercase">
                    JavaScript
                  </h2>
                </button>
                <button
                  className="hover:text-trueGray-200"
                  aria-label="チャンネルを作成"
                >
                  <PlusIcon width={18} height={18} />
                </button>
              </div>
              <ul className="px-2">
                <li className="group px-2 py-1 text-trueGray-400 bg-trueGray-700 rounded cursor-pointer">
                  <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center gap-x-1.5">
                      <HashtagIcon
                        className="text-trueGray-500"
                        width={24}
                        height={24}
                        aria-label="公開チャンネル"
                      />
                      <span className="text-trueGray-100">random</span>
                    </a>
                    <div className="flex gap-x-1">
                      <button aria-label="招待を作成">
                        <UserAddIcon width={16} height={16} />
                      </button>
                      <button aria-label="チャンネルの編集">
                        <CogIcon width={16} height={16} />
                      </button>
                    </div>
                  </div>
                </li>
                <li className="group px-2 py-1 text-trueGray-400 rounded hover:bg-trueGray-750 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center gap-x-1.5">
                      <HashtagIcon
                        className="text-trueGray-500"
                        width={24}
                        height={24}
                        aria-label="公開チャンネル"
                      />
                      <span>nextjs</span>
                    </a>
                    <div className="hidden gap-x-1 group-hover:flex">
                      <button aria-label="招待を作成">
                        <UserAddIcon width={16} height={16} />
                      </button>
                      <button aria-label="チャンネルの編集">
                        <CogIcon width={16} height={16} />
                      </button>
                    </div>
                  </div>
                </li>
                <li className="group px-2 py-1 text-trueGray-400 rounded hover:bg-trueGray-750 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center gap-x-1.5">
                      <HashtagIcon
                        className="text-trueGray-500"
                        width={24}
                        height={24}
                        aria-label="公開チャンネル"
                      />
                      <span>react</span>
                    </a>
                    <div className="hidden gap-x-1 group-hover:flex">
                      <button aria-label="招待を作成">
                        <UserAddIcon width={16} height={16} />
                      </button>
                      <button aria-label="チャンネルの編集">
                        <CogIcon width={16} height={16} />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <section
            className="flex justify-between items-center px-2 py-2 bg-trueGray-850"
            aria-label="ユーザーエリア"
          >
            <div className="flex items-center gap-x-1.5">
              <button
                className="relative hover:opacity-80"
                aria-label="miya-start、 オンライン"
              >
                <Image
                  className="rounded-full"
                  src="/crop.jpg"
                  alt="avatar"
                  width={32}
                  height={32}
                />
                <i className="absolute -right-1 bottom-0 w-4 h-4 bg-sky-600 border-trueGray-850 border-2 rounded-full"></i>
              </button>
              <div>
                <div className="text-sm font-semibold text-white">
                  miya-start
                </div>
                <div className="text-xs font-medium text-gray-400">#1429</div>
              </div>
            </div>
            <div className="flex items-center text-gray-400">
              <button
                className="px-1 py-2 rounded hover:text-gray-300 hover:bg-trueGray-750"
                aria-label="ミュート"
              >
                <MicrophoneIcon width={18} height={18} />
              </button>
              <button
                className="px-1 py-2 rounded hover:text-gray-300 hover:bg-trueGray-750"
                aria-label="スピーカーミュート"
              >
                <IconHeadphones size={20} />
              </button>
              <button
                className="px-1 py-2 rounded hover:text-gray-300 hover:bg-trueGray-750"
                aria-label="ユーザー設定"
              >
                <CogIcon width={20} height={20} />
              </button>
            </div>
          </section>
        </div>
      </nav>
      <div className="grid grid-rows-[3rem,1fr] h-screen min-h-screen">
        <header
          className="grid grid-cols-[1fr,auto] px-4 text-white bg-trueGray-750 border-b border-trueGray-900"
          aria-label="チャンネルのヘッダー"
        >
          <div className="flex items-center gap-x-2">
            <div className="text-2xl text-trueGray-500">#</div>
            <h3 className="text-sm">random</h3>
            <div
              className="pl-2 text-xs text-trueGray-400 border-l border-trueGray-400"
              id="channel-description"
            >
              JavaScriptに関する雑談
            </div>
          </div>
          <div className="flex items-center gap-x-4 text-trueGray-300">
            <button
              aria-label={`チャンネル${'random'}をミュートする`}
              aria-pressed="false"
            >
              <IconBellRinging fill="currentColor" size={24} />
            </button>
            <button aria-label="ピン留めされたメッセージ" aria-pressed="false">
              <IconPin fill="currentColor" size={26} />
            </button>
            <button
              className="text-white"
              aria-label="メンバーリスト"
              aria-pressed="true"
            >
              <UsersIcon width={24} height={24} />
            </button>
            <form className="relative" role="search">
              <input
                className="w-36 px-2 py-1 text-sm text-trueGray-200 bg-trueGray-900 rounded transition-width focus:w-60 focus:outline-none"
                type="search"
                placeholder="検索"
                aria-label="検索"
              />
              <span className="absolute top-1 right-0 mr-1">
                <SearchIcon width={20} height={20} />
              </span>
            </form>
            <button aria-label="受信ボックス" aria-pressed="false">
              <InboxIcon width={24} height={24} />
            </button>
            <a href="#" aria-label="ヘルプ">
              <QuestionMarkCircleIcon width={24} height={24} />
            </a>
          </div>
        </header>

        <div className="grid grid-cols-[1fr,auto] overflow-y-hidden">
          <main
            className="grid grid-rows-[1fr,auto] overflow-y-hidden bg-trueGray-750"
            aria-label="random (チャンネル)"
          >
            <div className="scrollbar-main mt-1 mr-1 overflow-y-auto text-gray-300">
              <div className="grid grid-cols-[auto,1fr] gap-5 py-4 mx-4 my-3 border-t border-trueGray-700">
                <button
                  className="self-start"
                  aria-label={`${'miya-start'}のアイコン`}
                >
                  <Image
                    className="rounded-full"
                    src="/crop.jpg"
                    alt="avatar"
                    width={32}
                    height={32}
                  />
                </button>

                <div>
                  <div>
                    <a href="#" className="text-white hover:underline">
                      miya-start
                    </a>
                    <time
                      className="ml-2 text-xs text-gray-400"
                      dateTime="2021-08-10T10:25:28.914Z"
                    >
                      2021/08/10
                    </time>
                  </div>
                  <div>
                    <div>親譲りの無鉄砲で小供の時から損ばかりしている。</div>
                    <div>
                      小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。
                    </div>
                    <div>
                      なぜそんな無闇（むやみ）をしたと聞く人があるかもしれぬ。
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 py-4 mx-4 my-3 border-t border-trueGray-700">
                <div className="flex-none">
                  <button aria-label={`${'test-user'}のアイコン`}>
                    <UserCircleIcon
                      className="text-green-400 bg-white rounded-full"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
                <div>
                  <div>
                    <a href="#" className="text-white hover:underline">
                      test-user
                    </a>
                    <time
                      className="ml-2 text-xs text-gray-400"
                      dateTime="2021-08-10T10:25:28.914Z"
                    >
                      2021/08/10
                    </time>
                  </div>
                  <div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.{' '}
                    </div>
                    <div>
                      Quod aliquid suscipit labore vero quisquam? Dolorem
                      quibusdam labore debitis, itaque eveniet quam natus
                      exercitationem cum eum, cupiditate harum.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 py-4 mx-4 my-3 border-t border-trueGray-700">
                <div className="flex-none">
                  <button aria-label={`${'miya-start'}のアイコン`}>
                    <Image
                      className="rounded-full"
                      src="/crop.jpg"
                      alt="avatar"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
                <div>
                  <div>
                    <a href="#" className="text-white hover:underline">
                      miya-start
                    </a>
                    <time
                      className="ml-2 text-xs text-gray-400"
                      dateTime="2021-08-10T10:25:28.914Z"
                    >
                      2021/08/10
                    </time>
                  </div>
                  <div>
                    <div>親譲りの無鉄砲で小供の時から損ばかりしている。</div>
                    <div>
                      小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。
                    </div>
                    <div>
                      なぜそんな無闇（むやみ）をしたと聞く人があるかもしれぬ。
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 py-4 mx-4 my-3 border-t border-trueGray-700">
                <div className="flex-none">
                  <button aria-label={`${'test-user'}のアイコン`}>
                    <UserCircleIcon
                      className="text-green-400 bg-white rounded-full"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
                <div>
                  <div>
                    <a href="#" className="text-white hover:underline">
                      test-user
                    </a>
                    <time
                      className="ml-2 text-xs text-gray-400"
                      dateTime="2021-08-10T10:25:28.914Z"
                    >
                      2021/08/10
                    </time>
                  </div>
                  <div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.{' '}
                    </div>
                    <div>
                      Quod aliquid suscipit labore vero quisquam? Dolorem
                      quibusdam labore debitis, itaque eveniet quam natus
                      exercitationem cum eum, cupiditate harum.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 py-4 mx-4 my-3 border-t border-trueGray-700">
                <div className="flex-none">
                  <button aria-label={`${'miya-start'}のアイコン`}>
                    <Image
                      className="rounded-full"
                      src="/crop.jpg"
                      alt="avatar"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
                <div>
                  <div>
                    <a href="#" className="text-white hover:underline">
                      miya-start
                    </a>
                    <time
                      className="ml-2 text-xs text-gray-400"
                      dateTime="2021-08-10T10:25:28.914Z"
                    >
                      2021/08/10
                    </time>
                  </div>
                  <div>
                    <div>親譲りの無鉄砲で小供の時から損ばかりしている。</div>
                    <div>
                      小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。
                    </div>
                    <div>
                      なぜそんな無闇（むやみ）をしたと聞く人があるかもしれぬ。
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 py-4 mx-4 my-3 border-t border-trueGray-700">
                <div className="flex-none">
                  <button aria-label={`${'test-user'}のアイコン`}>
                    <UserCircleIcon
                      className="text-green-400 bg-white rounded-full"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
                <div>
                  <div>
                    <a href="#" className="text-white hover:underline">
                      test-user
                    </a>
                    <time
                      className="ml-2 text-xs text-gray-400"
                      dateTime="2021-08-10T10:25:28.914Z"
                    >
                      2021/08/10
                    </time>
                  </div>
                  <div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.{' '}
                    </div>
                    <div>
                      Quod aliquid suscipit labore vero quisquam? Dolorem
                      quibusdam labore debitis, itaque eveniet quam natus
                      exercitationem cum eum, cupiditate harum.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[auto,1fr,auto] mx-3">
              <button
                className="h-11 px-3 py-2 text-trueGray-300 bg-trueGray-700 rounded-l-xl hover:text-trueGray-100"
                aria-label="ファイルをアップロードする"
              >
                <PlusCircleIcon width={24} height={24} />
              </button>
              <div>
                <input
                  className="w-full h-11 p-2 text-trueGray-200 bg-trueGray-700 focus:outline-none"
                  type="text"
                  placeholder={`#${'random'}へメッセージを送信`}
                  aria-label={`#${'random'}へメッセージを送信`}
                />
              </div>
              <div className="flex gap-2 h-11 px-3 py-2 bg-trueGray-700 rounded-r-xl">
                <button
                  className="text-trueGray-300 bg-trueGray-700 hover:text-trueGray-100"
                  aria-label="メンバーに話しかける"
                >
                  <AtSymbolIcon width={24} height={24} />
                </button>
                <button
                  className="text-trueGray-300 bg-trueGray-700 hover:text-yellow-300"
                  aria-label="絵文字を選択"
                >
                  <EmojiHappyIcon width={24} height={24} />
                </button>
              </div>
            </div>
          </main>

          <aside
            className="scrollbar w-56 p-3 overflow-y-auto bg-trueGray-800"
            aria-label={`${'random'}チャンネルのメンバーリスト`}
          >
            <h2
              className="text-xs font-semibold tracking-wide text-trueGray-400 uppercase"
              aria-label={`Core Team、${1}人のメンバー`}
            >
              Core Team — 1
            </h2>
            <ul className="mb-6">
              <li>
                <button
                  className="flex items-center gap-x-2 w-full px-2 py-1 my-1.5 text-trueGray-400 rounded hover:text-trueGray-200 hover:bg-trueGray-750"
                  aria-label={`${'miya-start'}、退席中`}
                >
                  <Image
                    className="rounded-full"
                    src="/crop.jpg"
                    alt="avatar"
                    width={32}
                    height={32}
                  />
                  <span className="font-medium">miya-start</span>
                </button>
              </li>
            </ul>
            <h2
              className="text-xs font-semibold tracking-wide text-trueGray-400 uppercase"
              aria-label={`オンライン、${2}人のメンバー`}
            >
              オンライン — 2
            </h2>
            <ul className="mb-6">
              <li>
                <button
                  className="flex items-center gap-x-2 w-full px-2 py-1 my-1.5 text-trueGray-400 rounded hover:text-trueGray-200 hover:bg-trueGray-750"
                  aria-label={`${'test-user'}、オンライン`}
                >
                  <UserCircleIcon
                    className="text-green-400 bg-white rounded-full"
                    width={32}
                    height={32}
                  />
                  <span className="font-medium">test-user</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-x-2 w-full px-2 py-1 my-1.5 text-trueGray-400 rounded hover:text-trueGray-200 hover:bg-trueGray-750"
                  aria-label={`${'めがね'}、オンライン`}
                >
                  <IconCardboards
                    className="text-white bg-purple-400 rounded-full"
                    width={32}
                    height={32}
                  />
                  <span className="font-medium">めがね</span>
                </button>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Home
