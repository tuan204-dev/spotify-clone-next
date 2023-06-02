import Header from '@/components/Header/Header'
import ListItem from '@/components/ListItem/ListItem'

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header>
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-white">
            Welcome back
          </h1>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
            <ListItem
              image="/assets/images/liked-songs.png"
              name="Liked Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="px-6 mt-2 mb-7">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">
            Newest songs
          </h1>
        </div>
        <div>List of songs!</div>
      </div>
    </div>
  )
}
