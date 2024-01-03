import SocialMedia from '@/components/SocialMedia';

export default async function About() {
  return (
    <section className="flex flex-col items-center lg:block py-20">
      <div className="flex justify-center">
        <div className="space-y-12">
          <div className="w-[350px] md:w-full space-y-4">
            <h1 className="text-4xl font-bold">Hello 👋🏼</h1>
            <p className="text-lg">My name is Yusuf. I am a software developer in Istanbul.</p>
            <p className="text-lg">
            I have been interested in <span className="bg-violet-100 p-1 rounded">iOS development </span> for six months, focusing on developing applications with <span className="bg-violet-100 p-1 rounded">UIKit</span>. I am also interested in <span className="bg-violet-100 p-1 rounded">SwiftUI</span> and enjoy contributing to communities through blogging.{' '}
            Currently, my interests include <span className="bg-yellow-100 p-1 rounded-md">custom keyboards</span>, <span className="bg-yellow-100 p-1 rounded-md">weightlifting</span>, and <span className="bg-yellow-100 p-1 rounded-md">designing mobile user interfaces.</span></p>
          </div>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
