import log from './logger';
import inquirer from 'inquirer';
import fs from 'node:fs';
import path from 'node:path';
import { formattedVueTemplate, formattedTS } from '@packages/utils';

const basePath = process.cwd();
const vueTemplate = (component: string) =>
    formattedVueTemplate(
      `<template>\r<div></div>\r</template>\n\n<script lang="ts" setup>defineOptions({name: '${component}'});</script>\n\n<style scoped lang="scss"></style>`
    ),
  runTemplate = (component: string) =>
    formattedTS(
      `import ${component} from './src/${component}.vue';import { compInstall } from '@ui/utils/export';export const Test = compInstall(${component});`
    );
let args: string[];
inquirer
  .prompt({
    type: 'input',
    message: '请输入要创建的组件名称(如创建多个需空格隔开)',
    name: 'componentName',
    validate: function (input: string) {
      if (
        !input ||
        !(args = [...new Set(input.split(' '))]) ||
        args.some(name => /^\d/.test(name))
      ) {
        return '不能为空或者数字开头！';
      }

      if (!args.every(name => /^[a-z]+(-[a-z]+){0,}$/.test(name))) {
        return '组件名格式错误, 示例：button-wrap button';
      }

      if (
        args.some(component =>
          fs.existsSync(
            flatPath(`${basePath}/packages/ui/components/${component}`)
          )
        )
      ) {
        return '组件名已存在，请更换';
      }
      return true;
    }
  })
  .then(() => {
    // Use user feedback for... whatever!!
    createComponentFile(args);
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

function createComponentFile(componentNames: string[]) {
  componentNames.forEach(component => {
    fs.mkdirSync(flatPath(`${basePath}/packages/ui/components/${component}`));
    fs.mkdirSync(
      flatPath(`${basePath}/packages/ui/components/${component}/src`)
    );
    try {
      fs.writeFileSync(
        flatPath(
          `${basePath}/packages/ui/components/${component}/src/${component}.vue`
        ),
        vueTemplate(component)
      );
      fs.writeFileSync(
        flatPath(`${basePath}/packages/ui/components/${component}/index.ts`),
        runTemplate(component),
        {}
      );
    } catch (error) {
      log.error(String(error));
    }
  });
}

function flatPath(target: string) {
  return path.normalize(target);
}
