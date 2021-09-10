import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  AtSymbolIcon,
  ChevronDownIcon,
  CogIcon,
  ColorSwatchIcon,
  EmojiHappyIcon,
  HomeIcon,
  InboxIcon,
  MicrophoneIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  UserAddIcon,
  UserCircleIcon,
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
        <title>チャットサービスのモックアップ</title>
      </Head>

      <nav className="flex-none flex flex-col min-h-screen h-screen w-20 py-2 bg-trueGray-900">
        <div className="overflow-y-auto text-sm">
          <ul className="text-center">
            <li className="group relative cursor-pointer">
              <div
                className="absolute top-0 left-0 flex items-center w-2 h-12"
                aria-hidden="true"
              >
                <span className="w-2 h-4 -ml-1 rounded transition-transform group-hover:bg-white group-hover:scale-y-150"></span>
              </div>
              <a
                href="#"
                className="flex justify-center items-center mx-auto w-12 h-12 text-trueGray-200 bg-trueGray-800 rounded-full transition-all ease-linear group-hover:text-white group-hover:bg-indigo-500 group-hover:rounded-2xl"
                aria-label="ホーム"
              >
                <HomeIcon
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
                <span className="w-2 h-4 -ml-1 rounded transition-transform group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
              </div>
              <a
                className="flex justify-center items-center"
                href="#"
                aria-label="テストサーバー1"
              >
                <Image
                  className="rounded-full transition-all ease-linear group-hover:rounded-2xl"
                  src="/dan-asaki-wC_YNVgIRdA-unsplash.jpg"
                  alt="ホーム"
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
              <a href="#" aria-label="テストサーバー2">
                <ColorSwatchIcon
                  className="mx-auto text-yellow-500 rounded-full transition-all ease-linear group-hover:rounded-2xl"
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
                <span className="w-2 h-10 -ml-1 bg-white rounded"></span>
              </div>
              <a
                className="flex justify-center items-center"
                href="#"
                aria-label="テストサーバー3"
              >
                <Image
                  className="rounded-2xl"
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
                <span className="w-2 h-4 -ml-1 rounded transition-transform group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
              </div>
              <a
                className="flex justify-center items-center mx-auto w-12 h-12 text-teal-500 bg-trueGray-800 rounded-full transition-all ease-linear group-hover:text-white group-hover:bg-teal-500 group-hover:rounded-2xl"
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
                <span className="w-2 h-4 -ml-1 rounded transition-transform group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
              </div>
              <a
                className="flex justify-center items-center mx-auto w-12 h-12 text-teal-500 bg-trueGray-800 rounded-full transition-all ease-linear group-hover:text-white group-hover:bg-teal-500 group-hover:rounded-2xl"
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
                <span className="w-2 h-4 -ml-1 rounded transition-transform group-hover:bg-white group-hover:scale-y-150 group-hover:duration-300"></span>
              </div>
              <a
                className="flex justify-center items-center mx-auto w-12 h-12 text-teal-500 bg-trueGray-800 rounded-full transition-all ease-linear group-hover:text-white group-hover:bg-teal-500 group-hover:rounded-2xl"
                href="#"
                aria-label="アプリをダウンロード"
              >
                <DownloadIcon width={24} height={24} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex-1 flex flex-col min-h-screen h-screen">
        <section className="flex h-12 text-white" aria-label="チャンネル一覧">
          <div className="flex-none flex justify-between items-center w-56 px-3 py-2 bg-trueGray-800 border-b border-trueGray-900">
            <h1>JavaScript</h1>
            <span>
              <ChevronDownIcon width={20} height={20} />
            </span>
          </div>
          <div className="flex-1 flex justify-between items-center px-4 bg-trueGray-750 border-b border-trueGray-900">
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
              <button
                aria-label="ピン留めされたメッセージ"
                aria-pressed="false"
              >
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
          </div>
        </section>
        <div className="flex-1 flex overflow-y-hidden">
          <aside className="flex-none flex flex-col justify-between w-56 bg-trueGray-800">
            <div className="overflow-y-auto">
              <div className="mt-4 mb-5">
                <div className="group flex justify-between items-center pr-4 text-trueGray-400 cursor-pointer">
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
                <div className="group flex justify-between items-center pr-4 text-trueGray-400 cursor-pointer">
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
                <button>
                  <section aria-label="miya-start、 オンライン">
                    <Image
                      className="rounded-full"
                      src="/crop.jpg"
                      alt="avatar"
                      width={32}
                      height={32}
                    />
                  </section>
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
          </aside>
          <div className="flex-1 flex justify-between">
            <main
              className="flex-1 bg-trueGray-750 flex flex-col justify-between"
              aria-label="random (チャンネル)"
            >
              <div className="overflow-y-auto text-gray-300">
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.{' '}
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.{' '}
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.{' '}
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

              <div className="flex items-center h-24 mx-3">
                <button
                  className="h-11 px-3 py-2 text-trueGray-300 bg-trueGray-700 rounded-l-xl hover:text-trueGray-100"
                  aria-label="ファイルをアップロードする"
                >
                  <PlusCircleIcon width={24} height={24} />
                </button>
                <div className="flex-1">
                  <input
                    className="w-full h-11 p-2 text-trueGray-200 bg-trueGray-700 focus:outline-none"
                    type="text"
                    placeholder={`#${'random'}へメッセージを送信`}
                    aria-label={`#${'random'}へメッセージを送信`}
                  />
                </div>
                <div className="flex gap-2 items-center h-11 px-3 py-2 bg-trueGray-700 rounded-r-xl">
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
              className="flex-none w-56 p-3 overflow-y-auto bg-trueGray-800"
              aria-label={`${'random'}チャンネルのメンバーリスト`}
            >
              <h2
                className="text-xs font-semibold tracking-wide text-trueGray-400 uppercase"
                aria-label={`スタッフ、${1}人のメンバー`}
              >
                スタッフ — 1
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
                    aria-label={`${'ダンボールめがね'}、オンライン`}
                  >
                    <IconCardboards
                      className="text-white bg-purple-400 rounded-full"
                      width={32}
                      height={32}
                    />
                    <span className="font-medium">ダンボールめがね</span>
                  </button>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
