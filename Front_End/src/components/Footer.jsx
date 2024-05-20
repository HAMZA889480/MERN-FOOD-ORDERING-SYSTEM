export default function Footer() {
  return (
    <div className=" bg-orange-500 py-3 md:py-6">
      <div className=" container mx-auto flex flex-col md:flex-row justify-between text-center align-middle">
        <span className="text-white text-2xl font-bold">Foodie Moodie</span>
        <div className="flex text-white gap-20 font-bold tracking-tight text-center justify-center mt-5 md:mt-0">
          <span>Home</span>
          <span>About</span>
        </div>
      </div>
    </div>
  );
}
