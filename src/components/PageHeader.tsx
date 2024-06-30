type PageHeaderProps = {
  title: string;
};

function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="px-7 lg:px-20 py-2 bg-[#414141] shadow-[0px_3px_10px_0px_rgba(0,0,0,0.66)]">
      <h3 className="text-[#fdfdfd] font-semibold text-2xl">{title}</h3>
    </div>
  );
}

export default PageHeader;
