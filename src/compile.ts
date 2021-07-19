import svgr from '@svgr/core';
import { transform } from 'esbuild';
import { camelCase, upperFirst } from 'lodash';

export async function compile(
  svg: string,
  name: string,
  icon: string,
  svgProps: Record<string, any>
) {
  const componentName = upperFirst(camelCase(`${name}-${icon}`));
  const jsxCode = await svgr(svg, { svgProps }, { componentName });
  const result = await transform(jsxCode, { loader: 'jsx' });

  return result.code;
}
