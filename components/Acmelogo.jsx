import { GlobeAltIcon } from '@heroicons/react/24/outline';


export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-slate-700`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px] text-black">Acme</p>
    </div>
  );
}