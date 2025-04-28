import { Pre, RawCode, highlight } from "codehike/code";
import { callout } from "./annotations/callout";

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-from-css");
  return (
    <div className="font-geist-mono bg-primary-text rounded-md p-4 overflow-hidden">
      {highlighted.meta && (
        <div className="flex items-center w-full relative mb-4 mt-[-0.5rem]">
          <div className="flex flex-row">
            <div className="inline-block w-[0.75rem] h-[0.75rem] mr-[0.375rem] border-[0.08em] border-[#ce5347] rounded-full bg-[#ed6b60] box-border"></div>
            <div className="inline-block w-[0.75rem] h-[0.75rem] mr-[0.375rem] border-[0.08em] border-[#d6a243] rounded-full bg-[#f5be4f] box-border"></div>
            <div className="inline-block w-[0.75rem] h-[0.75rem] border-[0.08em] border-[#58a942] rounded-full bg-[#62c554] box-border"></div>
          </div>
          <div
            title={highlighted.meta}
            data-ch-tab="north"
            data-active="true"
            className="flex flex-shrink px-4 whitespace-nowrap box-border"
          >
            <div className="text-xs overflow-hidden text-primary-bg text-ellipsis">
              {highlighted.meta}
            </div>
          </div>
          <div className="flex-[1_1_0%] min-w-[0.8em]"></div>
        </div>
      )}
      <Pre
        className="flex font-geist-mono overflow-x-auto"
        code={highlighted}
        handlers={[callout]}
      />
    </div>
  );
}
