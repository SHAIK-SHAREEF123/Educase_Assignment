const MobileLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[360px] min-h-[640px] bg-white p-6 rounded-xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;
