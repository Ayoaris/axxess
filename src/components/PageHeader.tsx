type PageHeaderProps = {
  title: string;
};

function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="px-7 lg:px-20 py-2 bg-[#414141]">
      <h3 className="text-[#fdfdfd] font-semibold text-2xl">{title}</h3>
    </div>
  );
}

export default PageHeader;
