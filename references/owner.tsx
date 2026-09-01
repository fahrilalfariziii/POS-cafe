import svgPaths from "./svg-pryn5dsgql";
import imgAb6AXuB985EXoLqM9T1QjcssAa5EE3Z4CI3LKiwTzNhSxRbsMpp3Azl4JTjygIs66ThoF4Jg2GxdyBmS2Hd0TX7Ye9Z4HRShZCqeHifqd2V2LIv678DP2Bh9CnPqcc8FTzsxTuOfOuap6Rfgu9QoSvhkbQqaeTgaibnm2NwXf628SOnpFrEVtCWin5X05YgxJbPlArgsV1VJLdZ25EcIs0H0PY4K4V1CqVeIM0KjCzKcQ0S3HwaI from "./1aaef6f6a63d7119911887d7804739639c90d7e5.png";
import imgQrCodeTable1 from "./bce75fef58b9d5e6cff99769dc1ac00d841db18a.png";
import imgQrCodeTable2 from "./89d7038fbdd530d0990e0ad0b33dcddedb248482.png";
import imgQrCodeTable3 from "./8328ac64bc09361739b0e786d0bf1a5abf684ab9.png";
import imgQrCodeTable4 from "./6715207ef7961df6da7790b9d6bda286db96042e.png";
import imgQrCodeTable5 from "./8743afa8d46965214ebb3ed8034a17dd22f36f1d.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[40px] text-black tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[48px]">Dashboard Overview</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">{`Today's Performance`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fdf9f0] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">DAILY</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">WEEKLY</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">MONTHLY</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f2ede4] content-stretch flex items-start p-[5px] relative rounded-[2px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header">
      <Container1 />
      <BackgroundBorder />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">TOTAL REVENUE</p>
        </div>
        <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
            <path d={svgPaths.p26835240} fill="#5E5E5B" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
        <p className="leading-[28px]">IDR 12,450K</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[8px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 13.3333 8" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p19734dc0} fill="#B8CDA9" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b8cda9] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">+8.5% from yesterday</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function TotalRevenue() {
  return (
    <div className="bg-[#fdf9f0] content-stretch flex flex-col h-[128px] items-start justify-between p-[25px] relative rounded-[4px] shrink-0 w-[365.33px]" data-name="Total Revenue">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph />
      <Container3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">TOTAL ORDERS</p>
        </div>
        <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
            <path d={svgPaths.p396ca1c0} fill="#5E5E5B" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
        <p className="leading-[28px]">142</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[6px] relative shrink-0 w-[12.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 12.6667 6" width="12.6667">
        <g id="Container">
          <path d={svgPaths.p167a0720} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Stable</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function TotalOrders() {
  return (
    <div className="bg-[#fdf9f0] content-stretch flex flex-col h-[128px] items-start justify-between p-[25px] relative rounded-[4px] shrink-0 w-[365.33px]" data-name="Total Orders">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph1 />
      <Container7 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">AVG. TRANSACTION</p>
        </div>
        <div className="relative shrink-0 size-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <path d={svgPaths.p2ef0ac00} fill="#5E5E5B" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
        <p className="leading-[28px]">IDR 87K</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[8px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 13.3333 8" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p296d7f00} fill="#BA1A1A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">-2.1% from yesterday</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function AvgTransaction() {
  return (
    <div className="bg-[#fdf9f0] content-stretch flex flex-col h-[128px] items-start justify-between p-[25px] relative rounded-[4px] shrink-0 w-[365.34px]" data-name="Avg Transaction">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Paragraph2 />
      <Container11 />
    </div>
  );
}

function SectionKpiCardsGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Section - KPI Cards Grid">
      <TotalRevenue />
      <TotalOrders />
      <AvgTransaction />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Revenue Trends</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Container">
          <path d={svgPaths.p38806900} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">EXPORT</p>
      </div>
      <Container16 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Button3 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function PlaceholderForActualChartRenderingLibrary() {
  return (
    <div className="absolute inset-[1px_1.01px_33px_33px] opacity-50" data-name="Placeholder for actual chart rendering library">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start justify-end pb-[17px] pl-[17px] pr-[16px] pt-[16px] relative size-full">
        <div className="h-px relative shrink-0 w-full" data-name="Faux grid lines">
          <div aria-hidden className="absolute border-[#c4c7c7] border-solid border-t inset-0 pointer-events-none" />
        </div>
        <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
          <div aria-hidden className="absolute border-[#c4c7c7] border-solid border-t inset-0 pointer-events-none" />
        </div>
        <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
          <div aria-hidden className="absolute border-[#c4c7c7] border-solid border-t inset-0 pointer-events-none" />
        </div>
        <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
          <div aria-hidden className="absolute border-[#c4c7c7] border-solid border-t inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">CHART VISUALIZATION AREA</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-dashed inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-px py-[193.5px] relative size-full">
        <PlaceholderForActualChartRenderingLibrary />
        <Container17 />
      </div>
    </div>
  );
}

function SectionMainChartArea() {
  return (
    <div className="bg-[#fdf9f0] col-[1/span_8] justify-self-stretch min-h-[400px] relative rounded-[4px] row-1 self-start shrink-0" data-name="Section - Main Chart Area">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] p-[25px] relative size-full">
        <Margin />
        <BackgroundBorder1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
          <p className="leading-[28px]">Best Sellers</p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ece8df] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">1</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">V60 Pour Over</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">45 sold</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Item">
      <Container18 />
      <Container20 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ece8df] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">2</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Flat White</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background1 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">38 sold</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Item">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ece8df] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">3</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Almond Croissant</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background2 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">32 sold</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Item">
      <Container24 />
      <Container26 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ece8df] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">4</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Iced Long Black</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">28 sold</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container27 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#ece8df] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">5</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Matcha Latte</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background4 />
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">21 sold</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Item">
      <Container30 />
      <Container32 />
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
      </div>
    </div>
  );
}

function SectionBestSellingItems() {
  return (
    <div className="bg-[#fdf9f0] relative rounded-[4px] shrink-0 w-full" data-name="Section - Best Selling Items">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Heading3 />
        <List />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0f1f09] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Inventory Alert</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3a4c31] text-[14px] whitespace-nowrap">
        <p className="leading-[21px] mb-0">3 items are running low on stock. Please</p>
        <p className="leading-[21px]">review ordering list.</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333" width="9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="#0F1F09" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[4.01px] items-center pt-[8px] relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f1f09] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">REVIEW STOCK</p>
      </div>
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading4 />
      <Container35 />
      <Button4 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-start relative size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <path d={svgPaths.p643d217} fill="#3A4C31" id="Icon" />
          </svg>
        </div>
        <Container34 />
      </div>
    </div>
  );
}

function SectionStatusAlerts() {
  return (
    <div className="bg-[#f5f0e7] relative rounded-[4px] shrink-0 w-full" data-name="Section - Status Alerts">
      <div aria-hidden className="absolute border-[#b8cda9] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pl-[28px] pr-[25px] py-[25px] relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function RightColumnTopItemsStatus() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Right Column: Top Items & Status">
      <SectionBestSellingItems />
      <SectionStatusAlerts />
    </div>
  );
}

function ComplexBentoLayoutForChartAndLists() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_501px] relative shrink-0 w-full" data-name="Complex Bento Layout for Chart and Lists">
      <SectionMainChartArea />
      <RightColumnTopItemsStatus />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1400px] relative shrink-0 w-full" data-name="Container">
      <Header />
      <SectionKpiCardsGrid />
      <ComplexBentoLayoutForChartAndLists />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="bg-[#fdf9f0] h-[1025px] min-h-[1025px] relative shrink-0 w-full" data-name="Main Canvas">
      <div className="min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[32px] pt-[64px] px-[32px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
          <p className="leading-[31.2px]">Artisan Brew POS</p>
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex h-[64px] items-center justify-between left-[72px] pb-px px-[24px] top-0 w-[1208px]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <Heading />
    </div>
  );
}

function Ab6AXuB985EXoLqM9T1QjcssAa5EE3Z4CI3LKiwTzNhSxRbsMpp3Azl4JTjygIs66ThoF4Jg2GxdyBmS2Hd0TX7Ye9Z4HRShZCqeHifqd2V2LIv678DP2Bh9CnPqcc8FTzsxTuOfOuap6Rfgu9QoSvhkbQqaeTgaibnm2NwXf628SOnpFrEVtCWin5X05YgxJbPlArgsV1VJLdZ25EcIs0H0PY4K4V1CqVeIM0KjCzKcQ0S3HwaI() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="AB6AXuB985EXoLqM9t1qjcssAa5eE3Z4cI3lKIWTzNhSxRbsMPP3azl4JTjygIs66ThoF4JG2GxdyBmS2hd0t_x7YE9Z4hRShZCqeHifqd2v2lIV678d_P2bh9cnPQCC8fTZSXTu-OF-OUAP6RFGU9qoSVHKBQqaeTgaibnm2NwXf628-sONP-frEVtCWin5X05ygxJbPLArgsV1vJLdZ25ecIs0h0pY4K4v1CqVE-iM0KjCzKcQ0-S3hwaI">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]" src={imgAb6AXuB985EXoLqM9T1QjcssAa5EE3Z4CI3LKiwTzNhSxRbsMpp3Azl4JTjygIs66ThoF4Jg2GxdyBmS2Hd0TX7Ye9Z4HRShZCqeHifqd2V2LIv678DP2Bh9CnPqcc8FTzsxTuOfOuap6Rfgu9QoSvhkbQqaeTgaibnm2NwXf628SOnpFrEVtCWin5X05YgxJbPlArgsV1VJLdZ25EcIs0H0PY4K4V1CqVeIM0KjCzKcQ0S3HwaI} />
      </div>
    </div>
  );
}

function BrandAvatarPlaceholder() {
  return (
    <div className="bg-[#ece8df] relative rounded-[2px] shrink-0 size-[48px]" data-name="Brand Avatar Placeholder">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Ab6AXuB985EXoLqM9T1QjcssAa5EE3Z4CI3LKiwTzNhSxRbsMpp3Azl4JTjygIs66ThoF4Jg2GxdyBmS2Hd0TX7Ye9Z4HRShZCqeHifqd2V2LIv678DP2Bh9CnPqcc8FTzsxTuOfOuap6Rfgu9QoSvhkbQqaeTgaibnm2NwXf628SOnpFrEVtCWin5X05YgxJbPlArgsV1VJLdZ25EcIs0H0PY4K4V1CqVeIM0KjCzKcQ0S3HwaI />
      </div>
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function BrandAvatarPlaceholderMargin() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start pb-[24px] relative shrink-0 w-[48px]" data-name="Brand Avatar Placeholder:margin">
      <BrandAvatarPlaceholder />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p191dcc80} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkTabs() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center opacity-80 relative shrink-0 w-full" data-name="Link - Tabs">
      <Container38 />
      <div className="absolute bg-black h-[32px] left-0 top-[16px] w-[3px]" data-name="Background" />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link">
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p5dfbb10} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link">
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19.976px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 19.9758 16" width="19.9758">
        <g id="Container">
          <path d={svgPaths.p444c500} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link">
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link">
      <Container42 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <BrandAvatarPlaceholderMargin />
        <LinkTabs />
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function SideNavBarDesktop() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex flex-col h-[1025px] items-center justify-between left-0 pr-px py-[24px] top-0 w-[72px]" data-name="SideNavBar (Desktop)">
      <div aria-hidden className="absolute border-[#e4e2dd] border-r border-solid inset-0 pointer-events-none" />
      <Container37 />
      <Link4 />
    </div>
  );
}

function DashboardOwnerArtisanPos() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[333px] pl-[72px] top-[194px] w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 249, 240) 0%, rgb(253, 249, 240) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Dashboard Owner - Artisan POS">
      <MainCanvas />
      <HeaderTopAppBar />
      <SideNavBarDesktop />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[40px] text-black tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[48px]">Floor Plan</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Manage tables and self-ordering QR codes.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] h-[48px] items-center px-[25px] py-px relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container48 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">ADD TABLE</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Button5 />
    </div>
  );
}

function HeaderActions() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header & Actions">
      <Container45 />
      <Container47 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f2ede4] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black text-center tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[28px]">1</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Table 1</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Capacity: 2</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading6 />
      <Container52 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background5 />
      <Container51 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e6e2d9] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444748] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">OCCUPIED</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p2db1a180} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container53 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Background6 />
      <Button6 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function QrCodeTable() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="QR Code Table 1">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgQrCodeTable1} />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center p-[9px] relative rounded-[2px] shrink-0 size-[96px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e6e2d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <QrCodeTable />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 16.6667 15" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p24cdffa0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] pt-[9px] px-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p1d25a580} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] pt-[9px] px-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container58 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder2 />
      <Container56 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function TableCardActiveOccupied() {
  return (
    <div className="bg-white col-1 justify-self-stretch min-h-[220px] relative rounded-[4px] row-1 self-start shrink-0" data-name="Table Card: Active (Occupied)">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[17px] relative size-full">
          <Margin1 />
          <Container54 />
          <div className="absolute bg-[#e5a796] h-[4px] left-px right-px top-px" data-name="Background" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e6e2d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f2ede4] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black text-center tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[28px]">2</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Table 2</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Capacity: 4</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading7 />
      <Container62 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background7 />
      <Container61 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#d4e9c4] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f1f09] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">AVAILABLE</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p2db1a180} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container63 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Background8 />
      <Button9 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function QrCodeTable1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="QR Code Table 2">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgQrCodeTable2} />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center p-[9px] relative rounded-[2px] shrink-0 size-[96px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e6e2d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <QrCodeTable1 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 16.6667 15" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p24cdffa0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] pt-[9px] px-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p1d25a580} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] pt-[9px] px-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container67 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <BackgroundBorder3 />
        <Container65 />
      </div>
    </div>
  );
}

function TableCardInactiveAvailable() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[220px] relative rounded-[4px] row-1 self-start shrink-0" data-name="Table Card: Inactive (Available)">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] p-[17px] relative size-full">
          <Margin2 />
          <Container64 />
          <div className="absolute bg-[#b8cda9] h-[4px] left-px right-px top-px" data-name="Background" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e6e2d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f2ede4] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black text-center tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[28px]">3</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Table 3</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Capacity: 2</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading8 />
      <Container71 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background9 />
      <Container70 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#d4e9c4] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f1f09] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">AVAILABLE</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p2db1a180} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container72 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Background10 />
      <Button12 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container68 />
      </div>
    </div>
  );
}

function QrCodeTable2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="QR Code Table 3">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgQrCodeTable3} />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center p-[9px] relative rounded-[2px] shrink-0 size-[96px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e6e2d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <QrCodeTable2 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 16.6667 15" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p24cdffa0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] pt-[9px] px-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container75 />
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p1d25a580} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] pt-[9px] px-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container76 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button13 />
      <Button14 />
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center relative size-full">
        <BackgroundBorder4 />
        <Container74 />
      </div>
    </div>
  );
}

function TableCardInactiveAvailable1() {
  return (
    <div className="bg-white col-3 justify-self-stretch min-h-[220px] relative rounded-[4px] row-1 self-start shrink-0" data-name="Table Card: Inactive (Available)">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] p-[17px] relative size-full">
          <Margin3 />
          <Container73 />
          <div className="absolute bg-[#b8cda9] h-[4px] left-px right-px top-px" data-name="Background" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e6e2d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f2ede4] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black text-center tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[28px]">4</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Table 4</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Capacity: 6</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading9 />
      <Container80 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background11 />
      <Container79 />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#e6e2d9] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#444748] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">OCCUPIED</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p2db1a180} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container81 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container78 />
      <Background12 />
      <Button15 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container77 />
      </div>
    </div>
  );
}

function QrCodeTable3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="QR Code Table 4">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgQrCodeTable4} />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center p-[9px] relative rounded-[2px] shrink-0 size-[96px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e6e2d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <QrCodeTable3 />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 16.6667 15" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p24cdffa0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] pt-[9px] px-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container85 />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p1d25a580} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] pt-[9px] px-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container86 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder5 />
      <Container84 />
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container83 />
      </div>
    </div>
  );
}

function TableCardActiveOccupied1() {
  return (
    <div className="bg-white col-4 justify-self-stretch min-h-[220px] relative rounded-[4px] row-1 self-start shrink-0" data-name="Table Card: Active (Occupied)">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[17px] relative size-full">
          <Margin4 />
          <Container82 />
          <div className="absolute bg-[#e5a796] h-[4px] left-px right-px top-px" data-name="Background" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e6e2d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#f2ede4] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[28px] text-center tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[28px]">5</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Table 5</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Capacity: 4</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading10 />
      <Container90 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background13 />
      <Container89 />
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#c4c7c7] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c16] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">DIRTY</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p2db1a180} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container91 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Background14 />
      <Button18 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container87 />
      </div>
    </div>
  );
}

function QrCodeTable4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="QR Code Table 5">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgQrCodeTable5} />
        </div>
        <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center opacity-50 p-[9px] relative rounded-[2px] shrink-0 size-[96px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e6e2d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <QrCodeTable4 />
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 16.6667 15" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p24cdffa0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] pt-[9px] px-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container95 />
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p1d25a580} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[15px] pt-[9px] px-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container96 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button19 />
      <Button20 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder6 />
      <Container94 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pt-[16px] relative" data-name="Margin">
      <Container93 />
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Margin6 />
      </div>
    </div>
  );
}

function TableCardNeedsCleaning() {
  return (
    <div className="bg-white col-1 justify-self-stretch min-h-[220px] relative rounded-[4px] row-2 self-start shrink-0" data-name="Table Card: Needs Cleaning">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[17px] relative size-full">
          <Margin5 />
          <Container92 />
          <div className="absolute bg-[#c4c7c7] h-[4px] left-px right-px top-px" data-name="Background" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e6e2d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function FloorGridBentoStyle() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[__309px_267px] relative shrink-0 w-full" data-name="Floor Grid (Bento style)">
      <TableCardActiveOccupied />
      <TableCardInactiveAvailable />
      <TableCardInactiveAvailable1 />
      <TableCardActiveOccupied1 />
      <TableCardNeedsCleaning />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <HeaderActions />
      <FloorGridBentoStyle />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="h-[960px] relative shrink-0 w-full" data-name="Main Content Area">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[31.2px]">Artisan Brew POS</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Table Management</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Heading11 />
        <Container98 />
      </div>
    </div>
  );
}

function HeaderTopAppBar1() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex h-[64px] items-center justify-between left-[72px] pb-px px-[24px] top-0 w-[1208px]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#858383] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">AB</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#1c1b1b] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[40px]" data-name="Background">
      <Container99 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[72px] relative shrink-0 w-[40px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Background15 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p191dcc80} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link">
      <Container101 />
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p1b2fa180} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link">
      <Container102 />
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p5dfbb10} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link">
      <Container103 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19.976px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 19.9758 16" width="19.9758">
        <g id="Container">
          <path d={svgPaths.pfceb980} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkActiveTab() {
  return (
    <div className="bg-white content-stretch flex h-[64px] items-center justify-center opacity-80 relative shrink-0 w-full" data-name="Link - Active Tab">
      <Container104 />
      <div className="absolute bg-black h-[32px] left-0 top-[16px] w-[3px]" data-name="Background" />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p1589e300} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link">
      <Container105 />
    </div>
  );
}

function Container100() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Link5 />
        <Link6 />
        <Link7 />
        <LinkActiveTab />
        <Link8 />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link">
      <Container107 />
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link9 />
      </div>
    </div>
  );
}

function SideNavBar() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex flex-col h-[1024px] items-center justify-between left-0 pr-px py-[24px] top-0 w-[72px]" data-name="SideNavBar">
      <div aria-hidden className="absolute border-[#e4e2dd] border-r border-solid inset-0 pointer-events-none" />
      <Margin7 />
      <Container100 />
      <Container106 />
    </div>
  );
}

function ManajemenMejaArtisanPos() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[3174px] pl-[72px] pt-[64px] top-[194px] w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 249, 240) 0%, rgb(253, 249, 240) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Manajemen Meja - Artisan POS">
      <MainContentArea />
      <HeaderTopAppBar1 />
      <SideNavBar />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[40px] text-black tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[48px]">Menu Catalog</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Manage items, pricing, and availability.</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading12 />
      <Container109 />
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[17px] py-px relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#747878] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container111 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Tambah Kategori</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[17px] py-px relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#747878] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container112 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Tambah Varian</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] h-[40px] items-center px-[24px] relative rounded-[2px] shrink-0" data-name="Button">
      <Container113 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Add New Menu</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function PageHeaderActions() {
  return (
    <div className="content-stretch flex items-end justify-between pb-[8px] relative shrink-0 w-full" data-name="Page Header & Actions">
      <Container108 />
      <Container110 />
    </div>
  );
}

function Button24() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">
          <p className="leading-[28px]">Menu</p>
        </div>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[20px] text-center whitespace-nowrap">
          <p className="leading-[28px]">Kategori</p>
        </div>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[20px] text-center whitespace-nowrap">
          <p className="leading-[28px]">{`Varian & Add-ons`}</p>
        </div>
      </div>
    </div>
  );
}

function FilterTabs() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pb-px relative shrink-0 w-full" data-name="Filter Tabs">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <Button24 />
      <Button25 />
      <Button26 />
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute bg-[#6a6a6a] content-stretch flex flex-col items-center justify-center left-0 px-[8px] py-[5px] rounded-[10px] top-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[21px]">All Items</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-center justify-center left-[84px] px-[8px] py-[5px] rounded-[10px] top-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[21px]">Espresso Bar</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-center justify-center left-[196.98px] pb-[7px] pt-[5px] px-[8px] rounded-[10px] top-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[21px]">{`Filter & Brew`}</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-center justify-center left-[306.57px] pb-[7px] pt-[5px] px-[8px] rounded-[10px] top-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[21px]">Pastries</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Search menu items...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f7f3ea] h-[33px] relative rounded-[2px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[41px] pr-[17px] py-[11.5px] relative size-full">
          <Container115 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute bottom-1/4 content-stretch flex flex-col items-start left-[12px] top-1/4" data-name="Container">
      <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
          <path d={svgPaths.p210dd580} fill="#5E5E5B" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[33px] relative shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Input />
        <Container116 />
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="absolute content-stretch flex h-[33px] items-start left-[855px] pl-[32px] top-0 w-[288px]" data-name="Margin">
      <Container114 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Margin8 />
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.pa414aa0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[48px]" data-name="Background">
      <Container118 />
    </div>
  );
}

function StatusChip() {
  return (
    <div className="bg-[#d4e9c4] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Status Chip">
      <div className="bg-[#3a4c31] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a4c31] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Available</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background16 />
      <StatusChip />
    </div>
  );
}

function Margin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container117 />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Espresso Bar</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[28px]">Flat White</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Double ristretto shot with</p>
        <p className="leading-[21px]">perfectly textured micro-foam…</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative size-full">
        <Container120 />
        <Heading13 />
        <Container121 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[9.912px] relative shrink-0 w-[9.914px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.91218" preserveAspectRatio="none" viewBox="0 0 9.91401 9.91218" width="9.91401">
        <g id="Container">
          <path d={svgPaths.p2f459b80} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="Background">
      <Container122 />
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p3488d5c0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="Background">
      <Container123 />
    </div>
  );
}

function VariantsAddons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Variants/Addons">
      <Background17 />
      <Background18 />
    </div>
  );
}

function VariantsAddonsMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Variants/Addons:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <VariantsAddons />
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
          <p className="leading-[28px]">Rp 45.000</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e4e2dd] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container124 />
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p10054d00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Edit">
      <Container125 />
    </div>
  );
}

function Container126() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDelete() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Delete">
      <Container126 />
    </div>
  );
}

function ActionsOverlay() {
  return (
    <div className="absolute opacity-0 right-[17px] top-[17px]" data-name="Actions overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ButtonEdit />
        <ButtonDelete />
      </div>
    </div>
  );
}

function ItemCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[2px] self-stretch" data-name="Item Card 1">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin9 />
        <Container119 />
        <VariantsAddonsMargin />
        <HorizontalBorder1 />
        <ActionsOverlay />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p530c300} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[48px]" data-name="Background">
      <Container128 />
    </div>
  );
}

function StatusChip1() {
  return (
    <div className="bg-[#d4e9c4] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Status Chip">
      <div className="bg-[#3a4c31] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a4c31] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Available</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Background19 />
        <StatusChip1 />
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container127 />
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">{`Filter & Brew`}</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[28px]">V60 Pour Over</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Single origin beans brewed</p>
        <p className="leading-[21px]">manually for a clean, nuanced…</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative size-full">
        <Container130 />
        <Heading14 />
        <Container131 />
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p3488d5c0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="Background">
      <Container132 />
    </div>
  );
}

function VariantsAddons1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Variants/Addons">
      <Background20 />
    </div>
  );
}

function VariantsAddonsMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Variants/Addons:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <VariantsAddons1 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
          <p className="leading-[28px]">Rp 55.000</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e4e2dd] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container133 />
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p10054d00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit1() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Edit">
      <Container134 />
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDelete1() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Delete">
      <Container135 />
    </div>
  );
}

function ActionsOverlay1() {
  return (
    <div className="absolute opacity-0 right-[17px] top-[17px]" data-name="Actions overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ButtonEdit1 />
        <ButtonDelete1 />
      </div>
    </div>
  );
}

function ItemCard1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[2px] self-stretch" data-name="Item Card 2">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin10 />
        <Container129 />
        <VariantsAddonsMargin1 />
        <HorizontalBorder2 />
        <ActionsOverlay1 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[12.755px] relative shrink-0 w-[21.188px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.7547" preserveAspectRatio="none" viewBox="0 0 21.1875 12.7547" width="21.1875">
        <g id="Container">
          <path d={svgPaths.p23266c00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[48px]" data-name="Background">
      <Container137 />
    </div>
  );
}

function StatusChip2() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Status Chip">
      <div className="bg-[#93000a] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#93000a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Out of Stock</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background21 />
      <StatusChip2 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container136 />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Pastries</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[28px]">Butter Croissant</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Classic French style flaky,</p>
        <p className="leading-[21px]">buttery pastry baked fresh daily.</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative size-full">
        <Container139 />
        <Heading15 />
        <Container140 />
      </div>
    </div>
  );
}

function VariantsAddonsMargin2() {
  return <div className="h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Variants/Addons:margin" />;
}

function Container141() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[28px] tracking-[-0.28px] w-full">
          <p className="leading-[28px]">Rp 35.000</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e4e2dd] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container141 />
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p10054d00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit2() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Edit">
      <Container142 />
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDelete2() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Delete">
      <Container143 />
    </div>
  );
}

function ActionsOverlay2() {
  return (
    <div className="absolute opacity-0 right-[17px] top-[17px]" data-name="Actions overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ButtonEdit2 />
        <ButtonDelete2 />
      </div>
    </div>
  );
}

function ItemCard3OutOfStock() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px opacity-75 relative rounded-[2px] self-stretch" data-name="Item Card 3 - Out of Stock">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin11 />
        <Container138 />
        <VariantsAddonsMargin2 />
        <HorizontalBorder3 />
        <ActionsOverlay2 />
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.pa414aa0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[48px]" data-name="Background">
      <Container145 />
    </div>
  );
}

function StatusChip3() {
  return (
    <div className="bg-[#d4e9c4] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Status Chip">
      <div className="bg-[#3a4c31] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a4c31] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Available</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Background22 />
        <StatusChip3 />
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container144 />
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Espresso Bar</p>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[28px]">Matcha Latte</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Premium ceremonial grade</p>
        <p className="leading-[21px]">matcha whisked with steamed…</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative size-full">
        <Container147 />
        <Heading16 />
        <Container148 />
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[9.912px] relative shrink-0 w-[9.914px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.91218" preserveAspectRatio="none" viewBox="0 0 9.91401 9.91218" width="9.91401">
        <g id="Container">
          <path d={svgPaths.p2f459b80} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="Background">
      <Container149 />
    </div>
  );
}

function Container150() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p3488d5c0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="Background">
      <Container150 />
    </div>
  );
}

function VariantsAddons2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Variants/Addons">
      <Background23 />
      <Background24 />
    </div>
  );
}

function VariantsAddonsMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Variants/Addons:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <VariantsAddons2 />
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
          <p className="leading-[28px]">Rp 48.000</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e4e2dd] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container151 />
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p10054d00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit3() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Edit">
      <Container152 />
    </div>
  );
}

function Container153() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDelete3() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Delete">
      <Container153 />
    </div>
  );
}

function ActionsOverlay3() {
  return (
    <div className="absolute opacity-0 right-[17px] top-[17px]" data-name="Actions overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ButtonEdit3 />
        <ButtonDelete3 />
      </div>
    </div>
  );
}

function ItemCard3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[2px] self-stretch" data-name="Item Card 4">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin12 />
        <Container146 />
        <VariantsAddonsMargin3 />
        <HorizontalBorder4 />
        <ActionsOverlay3 />
      </div>
    </div>
  );
}

function MenuGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center pt-[8px] relative shrink-0 w-full" data-name="Menu Grid">
      <ItemCard />
      <ItemCard1 />
      <ItemCard3OutOfStock />
      <ItemCard3 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="bg-[#fdf9f0] h-[960px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <PageHeaderActions />
          <FilterTabs />
          <HorizontalBorder />
          <MenuGrid />
        </div>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[31.2px]">Artisan Brew POS</p>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Heading17 />
      </div>
    </div>
  );
}

function HeaderTopAppBar2() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex h-[64px] items-center justify-between left-[72px] pb-px px-[24px] top-0 w-[1208px]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <Container154 />
    </div>
  );
}

function BrandMarkPlaceholderInitials() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[2px] shrink-0 size-[48px]" data-name="Brand Mark Placeholder (Initials)">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">AB</p>
      </div>
    </div>
  );
}

function BrandMarkPlaceholderInitialsMargin() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start pb-[16px] relative shrink-0 w-[48px]" data-name="Brand Mark Placeholder (Initials):margin">
      <BrandMarkPlaceholderInitials />
    </div>
  );
}

function Container157() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkDashboard() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link - Dashboard">
      <Container157 />
    </div>
  );
}

function Container158() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkSales() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link - Sales">
      <Container158 />
    </div>
  );
}

function Container159() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p5dfbb10} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkMenu() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link - Menu">
      <Container159 />
      <div className="absolute bg-black h-[32px] left-0 top-[16px] w-[3px]" data-name="Background" />
    </div>
  );
}

function Container160() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19.976px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 19.9758 16" width="19.9758">
        <g id="Container">
          <path d={svgPaths.p444c500} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkTables() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link - Tables">
      <Container160 />
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkSettings() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link - Settings">
      <Container161 />
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkDashboard />
      <LinkSales />
      <LinkMenu />
      <LinkTables />
      <LinkSettings />
    </div>
  );
}

function Container155() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-center relative size-full">
        <BrandMarkPlaceholderInitialsMargin />
        <Container156 />
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkLogout() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Link - Logout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container162 />
      </div>
    </div>
  );
}

function SideNavBar1() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex flex-col h-[1024px] items-center justify-between left-0 pr-px py-[24px] top-0 w-[72px]" data-name="SideNavBar">
      <div aria-hidden className="absolute border-[#e4e2dd] border-r border-solid inset-0 pointer-events-none" />
      <Container155 />
      <LinkLogout />
    </div>
  );
}

function ManajemenMenuArtisanPos() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1862px] pl-[72px] pt-[64px] top-[194px] w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 249, 240) 0%, rgb(253, 249, 240) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Manajemen Menu - Artisan POS">
      <MainContentCanvas />
      <HeaderTopAppBar2 />
      <SideNavBar1 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[40px] text-black tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[48px]">Menu Catalog</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Manage items, pricing, and availability.</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading18 />
      <Container164 />
    </div>
  );
}

function Container166() {
  return (
    <div className="h-[9px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 13.5 9" width="13.5">
        <g id="Container">
          <path d={svgPaths.p1b72c490} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[17px] py-px relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#747878] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container166 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Filter</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] h-[40px] items-center px-[24px] relative rounded-[2px] shrink-0" data-name="Button">
      <Container167 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Add New Menu</p>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <Button31 />
      <Button32 />
    </div>
  );
}

function PageHeaderActions1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Page Header & Actions">
      <Container163 />
      <Container165 />
    </div>
  );
}

function Button33() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[21px]">All Items</p>
        </div>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[21px]">Espresso Bar</p>
        </div>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[21px]">{`Filter & Brew`}</p>
        </div>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[21px]">Pastries</p>
        </div>
      </div>
    </div>
  );
}

function FilterTabs1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start pb-px relative shrink-0 w-full" data-name="Filter Tabs">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <Button33 />
      <Button34 />
      <Button35 />
      <Button36 />
    </div>
  );
}

function Container169() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.pa414aa0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background25() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[48px]" data-name="Background">
      <Container169 />
    </div>
  );
}

function StatusChip4() {
  return (
    <div className="bg-[#d4e9c4] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Status Chip">
      <div className="bg-[#3a4c31] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a4c31] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Available</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background25 />
      <StatusChip4 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container168 />
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Espresso Bar</p>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[28px]">Flat White</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Double ristretto shot with</p>
        <p className="leading-[21px]">perfectly textured micro-foam…</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative size-full">
        <Container171 />
        <Heading19 />
        <Container172 />
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="h-[9.912px] relative shrink-0 w-[9.914px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.91218" preserveAspectRatio="none" viewBox="0 0 9.91401 9.91218" width="9.91401">
        <g id="Container">
          <path d={svgPaths.p2f459b80} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background26() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="Background">
      <Container173 />
    </div>
  );
}

function Container174() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p3488d5c0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background27() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="Background">
      <Container174 />
    </div>
  );
}

function VariantsAddons3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Variants/Addons">
      <Background26 />
      <Background27 />
    </div>
  );
}

function VariantsAddonsMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Variants/Addons:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <VariantsAddons3 />
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
          <p className="leading-[28px]">Rp 45.000</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e4e2dd] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container175 />
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p10054d00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit4() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Edit">
      <Container176 />
    </div>
  );
}

function Container177() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDelete4() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Delete">
      <Container177 />
    </div>
  );
}

function ActionsOverlay4() {
  return (
    <div className="absolute opacity-0 right-[17px] top-[17px]" data-name="Actions overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ButtonEdit4 />
        <ButtonDelete4 />
      </div>
    </div>
  );
}

function ItemCard2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[2px] self-stretch" data-name="Item Card 1">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin13 />
        <Container170 />
        <VariantsAddonsMargin4 />
        <HorizontalBorder5 />
        <ActionsOverlay4 />
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p530c300} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background28() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[48px]" data-name="Background">
      <Container179 />
    </div>
  );
}

function StatusChip5() {
  return (
    <div className="bg-[#d4e9c4] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Status Chip">
      <div className="bg-[#3a4c31] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a4c31] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Available</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Background28 />
        <StatusChip5 />
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container178 />
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">{`Filter & Brew`}</p>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[28px]">V60 Pour Over</p>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Single origin beans brewed</p>
        <p className="leading-[21px]">manually for a clean, nuanced…</p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative size-full">
        <Container181 />
        <Heading20 />
        <Container182 />
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p3488d5c0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background29() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="Background">
      <Container183 />
    </div>
  );
}

function VariantsAddons4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Variants/Addons">
      <Background29 />
    </div>
  );
}

function VariantsAddonsMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Variants/Addons:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <VariantsAddons4 />
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
          <p className="leading-[28px]">Rp 55.000</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e4e2dd] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container184 />
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p10054d00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit5() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Edit">
      <Container185 />
    </div>
  );
}

function Container186() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDelete5() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Delete">
      <Container186 />
    </div>
  );
}

function ActionsOverlay5() {
  return (
    <div className="absolute opacity-0 right-[17px] top-[17px]" data-name="Actions overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ButtonEdit5 />
        <ButtonDelete5 />
      </div>
    </div>
  );
}

function ItemCard4() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[2px] self-stretch" data-name="Item Card 2">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin14 />
        <Container180 />
        <VariantsAddonsMargin5 />
        <HorizontalBorder6 />
        <ActionsOverlay5 />
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="h-[12.755px] relative shrink-0 w-[21.188px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.7547" preserveAspectRatio="none" viewBox="0 0 21.1875 12.7547" width="21.1875">
        <g id="Container">
          <path d={svgPaths.p23266c00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background30() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[48px]" data-name="Background">
      <Container188 />
    </div>
  );
}

function StatusChip6() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Status Chip">
      <div className="bg-[#93000a] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#93000a] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Out of Stock</p>
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background30 />
      <StatusChip6 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container187 />
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Pastries</p>
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[28px]">Butter Croissant</p>
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Classic French style flaky,</p>
        <p className="leading-[21px]">buttery pastry baked fresh daily.</p>
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative size-full">
        <Container190 />
        <Heading21 />
        <Container191 />
      </div>
    </div>
  );
}

function VariantsAddonsMargin6() {
  return <div className="h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Variants/Addons:margin" />;
}

function Container192() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[28px] tracking-[-0.28px] w-full">
          <p className="leading-[28px]">Rp 35.000</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e4e2dd] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container192 />
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p10054d00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit6() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Edit">
      <Container193 />
    </div>
  );
}

function Container194() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDelete6() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Delete">
      <Container194 />
    </div>
  );
}

function ActionsOverlay6() {
  return (
    <div className="absolute opacity-0 right-[17px] top-[17px]" data-name="Actions overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ButtonEdit6 />
        <ButtonDelete6 />
      </div>
    </div>
  );
}

function ItemCard3OutOfStock1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px opacity-75 relative rounded-[2px] self-stretch" data-name="Item Card 3 - Out of Stock">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin15 />
        <Container189 />
        <VariantsAddonsMargin6 />
        <HorizontalBorder7 />
        <ActionsOverlay6 />
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.pa414aa0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background31() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[48px]" data-name="Background">
      <Container196 />
    </div>
  );
}

function StatusChip7() {
  return (
    <div className="bg-[#d4e9c4] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="Status Chip">
      <div className="bg-[#3a4c31] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3a4c31] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Available</p>
      </div>
    </div>
  );
}

function Container195() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Background31 />
        <StatusChip7 />
      </div>
    </div>
  );
}

function Margin16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container195 />
      </div>
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Espresso Bar</p>
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[28px]">Matcha Latte</p>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Premium ceremonial grade</p>
        <p className="leading-[21px]">matcha whisked with steamed…</p>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative size-full">
        <Container198 />
        <Heading22 />
        <Container199 />
      </div>
    </div>
  );
}

function Container200() {
  return (
    <div className="h-[9.912px] relative shrink-0 w-[9.914px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.91218" preserveAspectRatio="none" viewBox="0 0 9.91401 9.91218" width="9.91401">
        <g id="Container">
          <path d={svgPaths.p2f459b80} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background32() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="Background">
      <Container200 />
    </div>
  );
}

function Container201() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p3488d5c0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background33() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="Background">
      <Container201 />
    </div>
  );
}

function VariantsAddons5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Variants/Addons">
      <Background32 />
      <Background33 />
    </div>
  );
}

function VariantsAddonsMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Variants/Addons:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <VariantsAddons5 />
      </div>
    </div>
  );
}

function Container202() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
          <p className="leading-[28px]">Rp 48.000</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e4e2dd] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container202 />
      </div>
    </div>
  );
}

function Container203() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p10054d00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEdit7() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Edit">
      <Container203 />
    </div>
  );
}

function Container204() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12 13.5" width="12">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDelete7() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button - Delete">
      <Container204 />
    </div>
  );
}

function ActionsOverlay7() {
  return (
    <div className="absolute opacity-0 right-[17px] top-[17px]" data-name="Actions overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ButtonEdit7 />
        <ButtonDelete7 />
      </div>
    </div>
  );
}

function ItemCard5() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[2px] self-stretch" data-name="Item Card 4">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Margin16 />
        <Container197 />
        <VariantsAddonsMargin7 />
        <HorizontalBorder8 />
        <ActionsOverlay7 />
      </div>
    </div>
  );
}

function MenuGrid1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Menu Grid">
      <ItemCard2 />
      <ItemCard4 />
      <ItemCard3OutOfStock1 />
      <ItemCard5 />
    </div>
  );
}

function MainContentCanvas1() {
  return (
    <div className="bg-[#fdf9f0] h-[960px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
          <PageHeaderActions1 />
          <FilterTabs1 />
          <MenuGrid1 />
        </div>
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[31.2px]">Artisan Brew POS</p>
      </div>
    </div>
  );
}

function Container207() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Search menu items...</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f7f3ea] h-[40px] relative rounded-[2px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[41px] pr-[17px] py-[11.5px] relative size-full">
          <Container207 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container208() {
  return (
    <div className="absolute bottom-1/4 content-stretch flex flex-col items-start left-[12px] top-1/4" data-name="Container">
      <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
          <path d={svgPaths.p210dd580} fill="#5E5E5B" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[256px]" data-name="Container">
      <Input1 />
      <Container208 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0 w-[288px]" data-name="Margin">
      <Container206 />
    </div>
  );
}

function Container205() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Heading23 />
        <Margin17 />
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNotifications() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[6px] relative shrink-0" data-name="Button - Notifications">
      <Container210 />
    </div>
  );
}

function Container211() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p3de21300} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonAccount() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[6px] relative shrink-0" data-name="Button - Account">
      <Container211 />
    </div>
  );
}

function Container209() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.99px] items-start relative size-full">
        <ButtonNotifications />
        <ButtonAccount />
      </div>
    </div>
  );
}

function HeaderTopAppBar3() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex h-[64px] items-center justify-between left-[72px] pb-px px-[24px] top-0 w-[1208px]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <Container205 />
      <Container209 />
    </div>
  );
}

function BrandMarkPlaceholderInitials1() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[2px] shrink-0 size-[48px]" data-name="Brand Mark Placeholder (Initials)">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">AB</p>
      </div>
    </div>
  );
}

function BrandMarkPlaceholderInitialsMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start pb-[16px] relative shrink-0 w-[48px]" data-name="Brand Mark Placeholder (Initials):margin">
      <BrandMarkPlaceholderInitials1 />
    </div>
  );
}

function Container214() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkDashboard1() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link - Dashboard">
      <Container214 />
    </div>
  );
}

function Container215() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkSales1() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link - Sales">
      <Container215 />
    </div>
  );
}

function Container216() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p5dfbb10} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkMenu1() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link - Menu">
      <Container216 />
      <div className="absolute bg-black h-[32px] left-0 top-[16px] w-[3px]" data-name="Background" />
    </div>
  );
}

function Container217() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19.976px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 19.9758 16" width="19.9758">
        <g id="Container">
          <path d={svgPaths.p444c500} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkTables1() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link - Tables">
      <Container217 />
    </div>
  );
}

function Container218() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkSettings1() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Link - Settings">
      <Container218 />
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkDashboard1 />
      <LinkSales1 />
      <LinkMenu1 />
      <LinkTables1 />
      <LinkSettings1 />
    </div>
  );
}

function Container212() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-center relative size-full">
        <BrandMarkPlaceholderInitialsMargin1 />
        <Container213 />
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkLogout1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Link - Logout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container219 />
      </div>
    </div>
  );
}

function SideNavBar2() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex flex-col h-[1024px] items-center justify-between left-0 pr-px py-[24px] top-0 w-[72px]" data-name="SideNavBar">
      <div aria-hidden className="absolute border-[#e4e2dd] border-r border-solid inset-0 pointer-events-none" />
      <Container212 />
      <LinkLogout1 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
          <p className="leading-[31.2px]">Tambah Menu Baru</p>
        </div>
      </div>
    </div>
  );
}

function Container221() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Container">
          <path d={svgPaths.p15494480} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button37() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[6px] relative size-full">
        <Container221 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f7f3ea] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Heading24 />
          <Button37 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Foto Produk</p>
      </div>
    </div>
  );
}

function Container225() {
  return (
    <div className="h-[30px] relative shrink-0 w-[33px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 33 30" width="33">
        <g id="Container">
          <path d={svgPaths.p4a88c98} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container226() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">Upload Gambar</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#f7f3ea] content-stretch flex flex-col gap-[8px] items-center justify-center px-[2px] py-[113px] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#c4c7c7] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <Container225 />
      <Container226 />
    </div>
  );
}

function Container224() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <Label />
      <BackgroundBorder7 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Nama Menu</p>
      </div>
    </div>
  );
}

function Container229() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">Contoh: Caramel Macchiato</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[48px] relative rounded-[2px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[14px] relative size-full">
          <Container229 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container228() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Kategori</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="image">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container231() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[16px] w-full">
          <p className="leading-[24px]">Espresso Bar</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white h-[48px] relative rounded-[2px] shrink-0 w-full" data-name="Options">
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[17px] py-[9px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[262px] pr-[9px] py-[12px] relative rounded-[inherit] size-full">
            <Image />
          </div>
          <Container231 />
        </div>
      </div>
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Options />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Harga (IDR)</p>
      </div>
    </div>
  );
}

function Container234() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[49px] overflow-clip right-[32px] top-[14px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">0</p>
      </div>
    </div>
  );
}

function Container236() {
  return <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Container" />;
}

function RectangleAlignStretch() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
        <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function Container235() {
  return (
    <div className="absolute content-stretch flex items-center left-[49px] right-[17px] top-[14px]" data-name="Container">
      <Container236 />
      <RectangleAlignStretch />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[48px] relative rounded-[2px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container234 />
        <Container235 />
      </div>
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container237() {
  return (
    <div className="absolute bottom-1/4 content-stretch flex flex-col items-start left-[16px] top-1/4" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Rp</p>
      </div>
    </div>
  );
}

function Container233() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input3 />
      <Container237 />
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container233 />
    </div>
  );
}

function Container227() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px pb-[71px] relative" data-name="Container">
      <Container228 />
      <Container230 />
      <Container232 />
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container224 />
      <Container227 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Deskripsi</p>
      </div>
    </div>
  );
}

function Container239() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[24px]">Jelaskan detail menu di sini...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[65px] pt-[17px] px-[17px] relative size-full">
          <Container239 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container238() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Textarea />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">{`Varian & Add-ons`}</p>
      </div>
    </div>
  );
}

function BxsRightArrow() {
  return (
    <div className="col-2 justify-self-end relative row-1 shrink-0 size-[17px]" data-name="bxs:right-arrow">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="bxs:right-arrow">
          <path d={svgPaths.p15ed19f0} fill="#6B6B6B" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container243() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center justify-self-stretch leading-[0] not-italic relative row-1 self-start shrink-0 text-[#6b7280] text-[16px]">
          <p className="leading-[normal]">{`Pilih Varian & Add-nos`}</p>
        </div>
        <BxsRightArrow />
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[40px] relative rounded-[2px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[10px] relative size-full">
          <Container243 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container242() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Input4 />
    </div>
  );
}

function Container244() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 16 18" width="16">
        <g id="Container">
          <path d={svgPaths.p2780bd80} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Button">
      <Container244 />
    </div>
  );
}

function VariantRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Variant Row">
      <Container242 />
      <Button38 />
    </div>
  );
}

function Container245() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function AddButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[6px] pt-[4px] relative shrink-0" data-name="Add Button">
      <div aria-hidden className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <Container245 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[12px]">Tambah Varian</p>
      </div>
    </div>
  );
}

function Container241() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <VariantRow />
      <AddButton />
    </div>
  );
}

function Container240() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <Container241 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[12px]">Status Ketersediaan</p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="image">
          <path d={svgPaths.p3b2c3a40} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-black relative rounded-[20px] shrink-0 size-[22px]" data-name="Input">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Image1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Container248() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Tersedia</p>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[7px] items-center left-[-1px] top-0" data-name="Label">
      <Input5 />
      <Container248 />
    </div>
  );
}

function Container249() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Habis</p>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[8px] items-center left-[108.86px] top-0" data-name="Label">
      <div className="bg-white relative rounded-[20px] shrink-0 size-[20px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#c4c7c7] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <Container249 />
    </div>
  );
}

function Container247() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Label7 />
      <Label8 />
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <Container247 />
    </div>
  );
}

function Container222() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <Container223 />
          <Container238 />
          <Container240 />
          <Container246 />
        </div>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="h-[48px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#747878] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[33px] py-px relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[12px]">Batal</p>
        </div>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="bg-black h-[48px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[32px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[12px]">Simpan Menu</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#f7f3ea] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e4e2dd] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start justify-end pb-[24px] pt-[25px] px-[24px] relative size-full">
          <Button39 />
          <Button40 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#fdf9f0] max-h-[921.5999755859375px] max-w-[672px] relative rounded-[8px] shrink-0 w-[672px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start max-h-[inherit] max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder />
        <Container222 />
        <BackgroundHorizontalBorder1 />
      </div>
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container220() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center p-[16px]" data-name="Container">
      <div className="absolute backdrop-blur-[2px] bg-[rgba(28,28,22,0.4)] inset-0" data-name="Overlay+OverlayBlur" />
      <BackgroundBorderShadow />
    </div>
  );
}

function TambahMenuArtisanPos() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1862px] pl-[72px] pt-[64px] top-[1287px] w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 249, 240) 0%, rgb(253, 249, 240) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Tambah Menu - Artisan POS">
      <MainContentCanvas1 />
      <HeaderTopAppBar3 />
      <SideNavBar2 />
      <Container220 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c16] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Revenue Overview</p>
      </div>
    </div>
  );
}

function Container252() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Track sales performance across categories and timeframes.</p>
      </div>
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading25 />
      <Container252 />
    </div>
  );
}

function Button41() {
  return (
    <div className="bg-[#ece8df] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[21px]">Daily</p>
        </div>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[21px]">Weekly</p>
        </div>
      </div>
    </div>
  );
}

function Button43() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[21px]">Monthly</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center p-[5px] relative rounded-[2px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Button41 />
      <Button42 />
      <Button43 />
    </div>
  );
}

function HeaderGlobalFilters() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header & Global Filters">
      <Container251 />
      <BackgroundBorder8 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">TOTAL REVENUE (TODAY)</p>
      </div>
      <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
          <path d={svgPaths.p26835240} fill="#5E5E5B" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container254() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
        <p className="leading-[28px]">Rp 12.450.000</p>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="h-[8px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 13.3333 8" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p19734dc0} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container257() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[21px]">+8.2% vs yesterday</p>
      </div>
    </div>
  );
}

function Container255() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container256 />
      <Container257 />
    </div>
  );
}

function Container253() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container254 />
        <Container255 />
      </div>
    </div>
  );
}

function TotalRevenue1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-between p-[25px] relative rounded-[4px] shrink-0 w-[365.33px]" data-name="Total Revenue">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Margin18 />
      <Container253 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">TOTAL ORDERS</p>
        </div>
        <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
            <path d={svgPaths.p396ca1c0} fill="#5E5E5B" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Margin19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container259() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
        <p className="leading-[28px]">142</p>
      </div>
    </div>
  );
}

function Container261() {
  return (
    <div className="h-[6px] relative shrink-0 w-[12.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 12.6667 6" width="12.6667">
        <g id="Container">
          <path d={svgPaths.p167a0720} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Similar to yesterday</p>
      </div>
    </div>
  );
}

function Container260() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container261 />
      <Container262 />
    </div>
  );
}

function Container258() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container259 />
        <Container260 />
      </div>
    </div>
  );
}

function TotalOrders1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-between p-[25px] relative rounded-[4px] shrink-0 w-[365.33px]" data-name="Total Orders">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Margin19 />
      <Container258 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">AVG ORDER VALUE</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p2fcd0500} fill="#5E5E5B" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container264() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
        <p className="leading-[28px]">Rp 87.676</p>
      </div>
    </div>
  );
}

function Container266() {
  return (
    <div className="h-[8px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 13.3333 8" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p19734dc0} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container267() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[21px]">+2.4% vs yesterday</p>
      </div>
    </div>
  );
}

function Container265() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container266 />
      <Container267 />
    </div>
  );
}

function Container263() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container264 />
        <Container265 />
      </div>
    </div>
  );
}

function AvgOrderValue() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-between p-[25px] relative rounded-[4px] shrink-0 w-[365.34px]" data-name="Avg Order Value">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Margin20 />
      <Container263 />
    </div>
  );
}

function KpIsBentoGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="KPIs Bento Grid">
      <TotalRevenue1 />
      <TotalOrders1 />
      <AvgOrderValue />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c16] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Revenue Trend</p>
      </div>
    </div>
  );
}

function Container269() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Container">
          <path d={svgPaths.p38806900} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container269 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[21px]">Export</p>
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading26 />
        <Button44 />
      </div>
    </div>
  );
}

function Container270() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">08:00</p>
      </div>
    </div>
  );
}

function BarsMockData() {
  return (
    <div className="relative shrink-0 w-[134.42px]" data-name="Bars (Mock Data)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container270 />
      </div>
    </div>
  );
}

function Container272() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">10:00</p>
      </div>
    </div>
  );
}

function Container271() {
  return (
    <div className="relative shrink-0 w-[134.44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container272 />
      </div>
    </div>
  );
}

function Container274() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-black whitespace-nowrap">
        <p className="leading-[15px]">12:00</p>
      </div>
    </div>
  );
}

function Container273() {
  return (
    <div className="relative shrink-0 w-[134.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container274 />
      </div>
    </div>
  );
}

function Container276() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">14:00</p>
      </div>
    </div>
  );
}

function Container275() {
  return (
    <div className="relative shrink-0 w-[134.44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container276 />
      </div>
    </div>
  );
}

function Container278() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">16:00</p>
      </div>
    </div>
  );
}

function Container277() {
  return (
    <div className="relative shrink-0 w-[134.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container278 />
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">18:00</p>
      </div>
    </div>
  );
}

function Container279() {
  return (
    <div className="relative shrink-0 w-[134.44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container280 />
      </div>
    </div>
  );
}

function Container282() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">20:00</p>
      </div>
    </div>
  );
}

function Container281() {
  return (
    <div className="relative shrink-0 w-[134.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Container282 />
      </div>
    </div>
  );
}

function ChartAreaMarginForYAxis() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Chart Area margin for Y-axis">
      <div aria-hidden className="absolute border-[rgba(228,226,221,0.3)] border-dashed border-l inset-0 pointer-events-none" />
      <div className="flex flex-row items-end justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-end justify-center pl-[9px] relative size-full">
          <BarsMockData />
          <Container271 />
          <Container273 />
          <Container275 />
          <Container277 />
          <Container279 />
          <Container281 />
        </div>
      </div>
    </div>
  );
}

function Container283() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">15M</p>
      </div>
    </div>
  );
}

function Container284() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">10M</p>
      </div>
    </div>
  );
}

function Container285() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">5M</p>
      </div>
    </div>
  );
}

function Container286() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">0</p>
      </div>
    </div>
  );
}

function YAxisLabelsRoughApprox() {
  return (
    <div className="absolute bottom-px left-[-8px] opacity-50 top-0 w-[48px]" data-name="Y-Axis Labels (Rough approx)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pb-[8px] relative size-full">
        <Container283 />
        <Container284 />
        <Container285 />
        <Container286 />
      </div>
    </div>
  );
}

function CssBarChartVisualization() {
  return (
    <div className="h-[256px] relative shrink-0 w-full" data-name="CSS Bar Chart Visualization">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-center pb-[9px] pl-[48px] pt-[16px] relative size-full">
          <ChartAreaMarginForYAxis />
          <YAxisLabelsRoughApprox />
        </div>
      </div>
    </div>
  );
}

function MainChartArea() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Main Chart Area">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        <Container268 />
        <CssBarChartVisualization />
      </div>
    </div>
  );
}

function Heading27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c16] text-[20px] w-full">
        <p className="leading-[28px]">Top Categories</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Heading27 />
      </div>
    </div>
  );
}

function Container289() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Espresso Based</p>
      </div>
    </div>
  );
}

function Container290() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">45%</p>
      </div>
    </div>
  );
}

function Container288() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[4px] relative shrink-0 w-full" data-name="Container">
      <Container289 />
      <Container290 />
    </div>
  );
}

function Background34() {
  return (
    <div className="bg-[#ece8df] h-[6px] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-black h-[6px] left-0 right-[55%] rounded-[12px] top-0" data-name="Background" />
    </div>
  );
}

function Container291() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">Rp 5.602.500</p>
      </div>
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Category 1">
      <Container288 />
      <Background34 />
      <Container291 />
    </div>
  );
}

function Container293() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Filter Coffee</p>
      </div>
    </div>
  );
}

function Container294() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">25%</p>
      </div>
    </div>
  );
}

function Container292() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[4px] pr-[0.01px] relative size-full">
        <Container293 />
        <Container294 />
      </div>
    </div>
  );
}

function Background35() {
  return (
    <div className="bg-[#ece8df] h-[6px] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#5e5e5b] h-[6px] left-0 right-3/4 rounded-[12px] top-0" data-name="Background" />
    </div>
  );
}

function Container295() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">Rp 3.112.500</p>
      </div>
    </div>
  );
}

function Category1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Category 2">
      <Container292 />
      <Background35 />
      <Container295 />
    </div>
  );
}

function Container297() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Pastries</p>
      </div>
    </div>
  );
}

function Container298() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">20%</p>
      </div>
    </div>
  );
}

function Container296() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[4px] relative shrink-0 w-full" data-name="Container">
      <Container297 />
      <Container298 />
    </div>
  );
}

function Background36() {
  return (
    <div className="bg-[#ece8df] h-[6px] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#747878] h-[6px] left-0 right-[80%] rounded-[12px] top-0" data-name="Background" />
    </div>
  );
}

function Container299() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">Rp 2.490.000</p>
      </div>
    </div>
  );
}

function Category2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Category 3">
      <Container296 />
      <Background36 />
      <Container299 />
    </div>
  );
}

function Container301() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Merchandise</p>
      </div>
    </div>
  );
}

function Container302() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">10%</p>
      </div>
    </div>
  );
}

function Container300() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[4px] relative shrink-0 w-full" data-name="Container">
      <Container301 />
      <Container302 />
    </div>
  );
}

function Background37() {
  return (
    <div className="bg-[#ece8df] h-[6px] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#c4c7c7] h-[6px] left-0 right-[90%] rounded-[12px] top-0" data-name="Background" />
    </div>
  );
}

function Container303() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">Rp 1.245.000</p>
      </div>
    </div>
  );
}

function Category3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Category 4">
      <Container300 />
      <Background37 />
      <Container303 />
    </div>
  );
}

function Container287() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[44px] relative size-full">
        <Category />
        <Category1 />
        <Category2 />
        <Category3 />
      </div>
    </div>
  );
}

function TopCategories() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" data-name="Top Categories">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative size-full">
        <Heading3Margin />
        <Container287 />
      </div>
    </div>
  );
}

function Heading28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c16] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Recent Transactions</p>
      </div>
    </div>
  );
}

function Container305() {
  return (
    <div className="h-[9px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 13.5 9" width="13.5">
        <g id="Container">
          <path d={svgPaths.p1b72c490} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container306() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[21px]">All Categories</p>
        </div>
      </div>
    </div>
  );
}

function Container307() {
  return (
    <div className="h-[3.75px] relative shrink-0 w-[7.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.75" preserveAspectRatio="none" viewBox="0 0 7.5 3.75" width="7.5">
        <g id="Container">
          <path d={svgPaths.p2c2217a0} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFilterDropdownTriggerVisualOnly() {
  return (
    <div className="bg-[#fdf9f0] content-stretch flex items-center justify-between px-[13px] py-[7px] relative rounded-[2px] shrink-0" data-name="Button - Filter Dropdown trigger (visual only)">
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container305 />
      <Container306 />
      <Container307 />
    </div>
  );
}

function Container304() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading28 />
          <ButtonFilterDropdownTriggerVisualOnly />
        </div>
      </div>
    </div>
  );
}

function Margin21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container304 />
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[97.77px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">TIME</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[111.59px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">ORDER ID</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[283.89px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">ITEMS</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[79.45px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">STATUS</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[131.97px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5e5e5b] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">AMOUNT (IDR)</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function Data() {
  return (
    <div className="relative shrink-0 w-[97.77px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">12:45 PM</p>
        </div>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[111.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">#ORD-092</p>
        </div>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[283.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">2x Flat White, 1x Croissant</p>
        </div>
      </div>
    </div>
  );
}

function Background38() {
  return (
    <div className="bg-[#b8cda9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4c31] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PAID</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[79.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12.5px] pt-[15.5px] px-[8px] relative size-full">
        <Background38 />
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[131.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">Rp 125.000</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(228,226,221,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[97.77px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">12:30 PM</p>
        </div>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[111.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">#ORD-091</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[283.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">1x V60 Ethiopia</p>
        </div>
      </div>
    </div>
  );
}

function Background39() {
  return (
    <div className="bg-[#b8cda9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4c31] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PAID</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[79.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12.5px] pt-[15.5px] px-[8px] relative size-full">
        <Background39 />
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[131.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">Rp 45.000</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(228,226,221,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Data5 />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[97.77px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">12:15 PM</p>
        </div>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[111.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">#ORD-090</p>
        </div>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[283.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">3x Iced Latte, 1x Beans 250g</p>
        </div>
      </div>
    </div>
  );
}

function Background40() {
  return (
    <div className="bg-[#b8cda9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4c31] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PAID</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[79.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12.5px] pt-[15.5px] px-[8px] relative size-full">
        <Background40 />
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[131.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">Rp 310.000</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(228,226,221,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[97.77px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">11:55 AM</p>
        </div>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[111.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">#ORD-089</p>
        </div>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[283.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">1x Espresso, 1x Sparkling Water</p>
        </div>
      </div>
    </div>
  );
}

function Background41() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#93000a] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">VOID</p>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[79.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12.5px] pt-[15.5px] px-[8px] relative size-full">
        <Background41 />
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[131.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] text-right whitespace-nowrap">
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[21px] line-through">Rp 55.000</p>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(228,226,221,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Data15 />
      <Data16 />
      <Data17 />
      <Data18 />
      <Data19 />
    </div>
  );
}

function Data20() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12.5px] pt-[13px] px-[8px] relative shrink-0 w-[97.77px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">11:40 AM</p>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12.5px] pt-[13px] px-[8px] relative shrink-0 w-[111.59px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">#ORD-088</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12.5px] pt-[13px] px-[8px] relative shrink-0 w-[283.89px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">2x Cappuccino</p>
      </div>
    </div>
  );
}

function Background42() {
  return (
    <div className="bg-[#b8cda9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4c31] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PAID</p>
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] pt-[15.5px] px-[8px] relative shrink-0 w-[79.45px]" data-name="Data">
      <Background42 />
    </div>
  );
}

function Data24() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[12.5px] pt-[13px] px-[8px] relative shrink-0 w-[131.97px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c16] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">Rp 90.000</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
      <Data24 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <HeaderRow />
        <Body />
      </div>
    </div>
  );
}

function Container308() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5e5b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">Showing 5 of 142 transactions today</p>
        </div>
      </div>
    </div>
  );
}

function Button45() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[21px]">View All Records</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(228,226,221,0.5)] border-solid border-t inset-0 pointer-events-none" />
      <Container308 />
      <Button45 />
    </div>
  );
}

function Margin22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <HorizontalBorder9 />
      </div>
    </div>
  );
}

function DetailedSalesTable() {
  return (
    <div className="bg-white col-[2/span_2] justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" data-name="Detailed Sales Table">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[25px] relative size-full">
          <Margin21 />
          <Table />
          <Margin22 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e4e2dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SplitLayoutCategoriesDetailedTable() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_434px] relative shrink-0 w-full" data-name="Split Layout: Categories & Detailed Table">
      <TopCategories />
      <DetailedSalesTable />
    </div>
  );
}

function Container250() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <HeaderGlobalFilters />
      <KpIsBentoGrid />
      <MainChartArea />
      <SplitLayoutCategoriesDetailedTable />
    </div>
  );
}

function ScrollableContentCanvas() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex flex-col inset-[64px_0_-270px_0] items-start pb-[96px] pt-[32px] px-[32px]" data-name="Scrollable Content Canvas">
      <Container250 />
    </div>
  );
}

function TitleHeading() {
  return (
    <div className="relative shrink-0" data-name="Title → Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap">
          <p className="leading-[31.2px]">Sales</p>
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBarFromJson() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[24px] right-0 top-0" data-name="Header - TopAppBar (from JSON)">
      <div aria-hidden className="absolute border-[#e4e2dd] border-b border-solid inset-0 pointer-events-none" />
      <TitleHeading />
    </div>
  );
}

function MainContentArea1() {
  return (
    <div className="flex-[1_0_0] h-[1025px] min-w-px relative" data-name="Main Content Area">
      <ScrollableContentCanvas />
      <HeaderTopAppBarFromJson />
    </div>
  );
}

function Container309() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#858383] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">AB</p>
      </div>
    </div>
  );
}

function Background43() {
  return (
    <div className="bg-[#1c1b1b] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Background">
      <Container309 />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[8px] relative shrink-0" data-name="Logo">
      <Background43 />
    </div>
  );
}

function LogoMargin() {
  return (
    <div className="relative shrink-0" data-name="Logo:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Logo />
      </div>
    </div>
  );
}

function Container310() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDashboard() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Button - Dashboard">
      <Container310 />
    </div>
  );
}

function Container311() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p1b2fa180} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSalesActive() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center opacity-80 relative shrink-0 w-full" data-name="Button - Sales (Active)">
      <Container311 />
      <div className="absolute bg-black h-[32px] left-0 top-[16px] w-[3px]" data-name="Background" />
    </div>
  );
}

function Container312() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p5dfbb10} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Button - Menu">
      <Container312 />
    </div>
  );
}

function Container313() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19.976px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 19.9758 16" width="19.9758">
        <g id="Container">
          <path d={svgPaths.p444c500} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonTables() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Button - Tables">
      <Container313 />
    </div>
  );
}

function Container314() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSettings() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-center relative shrink-0 w-full" data-name="Button - Settings">
      <Container314 />
    </div>
  );
}

function MainNavTabs() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Main Nav Tabs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <ButtonDashboard />
        <ButtonSalesActive />
        <ButtonMenu />
        <ButtonTables />
        <ButtonSettings />
      </div>
    </div>
  );
}

function Container315() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#5E5E5B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button46() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container315 />
      </div>
    </div>
  );
}

function FooterNav() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Nav">
      <div aria-hidden className="absolute border-[#e4e2dd] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Button46 />
      </div>
    </div>
  );
}

function SideNavBarFromJson() {
  return (
    <div className="absolute bg-[#fdf9f0] content-stretch flex flex-col h-[1025px] items-center justify-between left-0 pr-px py-[24px] top-0 w-[72px]" data-name="SideNavBar (from JSON)">
      <div aria-hidden className="absolute border-[#e4e2dd] border-r border-solid inset-0 pointer-events-none" />
      <LogoMargin />
      <MainNavTabs />
      <FooterNav />
    </div>
  );
}

function LaporanPenjualanArtisanPos() {
  return (
    <div className="absolute content-stretch flex h-[1295px] items-start justify-center left-[4486px] pl-[72px] top-[194px] w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(253, 249, 240) 0%, rgb(253, 249, 240) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Laporan Penjualan - Artisan POS">
      <MainContentArea1 />
      <SideNavBarFromJson />
    </div>
  );
}

export default function Owner() {
  return (
    <div className="bg-[#707070] relative size-full" data-name="owner">
      <DashboardOwnerArtisanPos />
      <ManajemenMejaArtisanPos />
      <ManajemenMenuArtisanPos />
      <TambahMenuArtisanPos />
      <LaporanPenjualanArtisanPos />
    </div>
  );
}