import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050816] pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-[#050816] font-bold text-xl group-hover:bg-gray-200 transition-colors">
                O
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Ordyn</span>
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Engineering intelligent digital systems for modern businesses. We build the automation, infrastructure, and applications that scale companies.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-6 tracking-wide">Capabilities</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">AI Automation</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Web Applications</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Mobile Development</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Backend Infrastructure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-6 tracking-wide">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="mailto:info@ordyn.in" className="text-gray-500 hover:text-white text-sm transition-colors">info@ordyn.in</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Twitter (X)</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">GitHub</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Ordyn Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             <Link href="#" className="text-gray-600 hover:text-gray-300 text-sm transition-colors">Privacy Policy</Link>
             <Link href="#" className="text-gray-600 hover:text-gray-300 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

