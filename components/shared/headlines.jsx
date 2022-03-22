

export const Headline = ({ title = "" }) => {
  return <h2 className="uppercase text-center text-current font-black text-2xl md:text-[clamp(24px,_20vw,_60px)] leading-tight">{title}</h2>;
}


export const HeadlineGroup = ({ category = "", title = "" }) => {
  return (
    <hgroup>
      <h3 className="uppercase text-center text-black font-light text-sm md:text-base tracking-widest leading-none">{category}</h3>
      <h2 className="uppercase text-center text-black font-black text-2xl md:text-[clamp(24px,_20vw,_60px)] leading-none">{title}</h2>
    </hgroup>
  );
};
