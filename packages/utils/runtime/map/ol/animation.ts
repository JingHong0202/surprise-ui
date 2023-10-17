import Path, { Options } from 'ol-ext/featureanimation/Path.js';
import { rotateImg } from '../../canvas/rotation';
import {
  FeatureAnimationEvent,
  animationControler
} from 'ol-ext/featureanimation/FeatureAnimation';
import { Feature, Map } from 'ol';
import { LineString } from 'ol/geom';
import { Layer } from 'ol/layer';
import { Coordinate } from 'ol/coordinate';
import { Icon, Style } from 'ol/style';

type animatePathArgs = {
  map: Map;
  layer: Layer;
  pathFeature: Feature<LineString>;
  pointFeature: Feature;
  rotate?: number;
  repeat?: number;
  pathOptions?: Options;
  reverse?: boolean;
  autoFit?: boolean;
  autoCenter?: boolean;
  autoRotation?: boolean;
  animatingCallback?: (e: FeatureAnimationEvent) => void;
  animationStartCallback?: (e: FeatureAnimationEvent) => void;
  animationEndCallback?: (e: FeatureAnimationEvent) => void;
  updateController?: (controller: animationControler, animation: Path) => void;
};
/*@__NO_SIDE_EFFECTS__*/
export async function animationPath({
  map,
  layer,
  pathFeature,
  pointFeature,
  rotate,
  repeat,
  pathOptions = {},
  reverse = false,
  autoCenter = true,
  autoFit = true,
  autoRotation = false,
  animatingCallback,
  animationEndCallback,
  animationStartCallback,
  updateController
}: animatePathArgs): Promise<animationControler> {
  // auto center
  autoFit &&
    map?.getView().fit(pathFeature.getGeometry()!, {
      size: map.getSize(),
      padding: [100, 100, 100, 100]
    });

  // hander rotate
  if (rotate && !isNaN(rotate)) {
    const iconStyle = (pointFeature.getStyle()! as Style).getImage() as Icon,
      imgEle = iconStyle.getImage(1) as HTMLImageElement;

    pathOptions!.revers = reverse;
    imgEle.src = await rotateImg(
      iconStyle.getSrc()!,
      reverse ? -rotate : rotate
    );
    imgEle.onload = () => {
      // @ts-ignore
      iconStyle.size_ = [imgEle.width, imgEle.height];
    };
  }

  const animation = new Path(
    Object.assign(
      {
        path: pathFeature,
        rotate: true,
        fade(p: number) {
          return p / 0.2;
        }
        //     hiddenStyle:  new Style({
        //   image: icon
        // })
        // easing: ol.easing[$("#easing").val()],
        // speed: 500,
        // repeat: 10,
        // duration: 2000,
        // revers: true
      },
      pathOptions
    )
  );
  animation.on(
    //@ts-ignore
    'animating',
    function (e: FeatureAnimationEvent) {
      if (autoCenter) {
        // @ts-ignore
        map?.getView().setCenter(e.geom.getCoordinates() as Coordinate);
      }
      if (autoRotation) {
        //@ts-ignore
        map?.getView().setRotation((e.rotation as number) || 0);
      }
      animatingCallback && animatingCallback(e);
    }
  );

  animationStartCallback &&
    animation.on(
      //@ts-ignore
      'animationstart',
      animationStartCallback
    );

  // eslint-disable-next-line
  const args = arguments;
  let isStop: boolean;
  animation.on(
    //@ts-ignore
    'animationend',
    async function (e: FeatureAnimationEvent) {
      // 该变量用于防止调用 stop 时触发 end event
      if (!isStop) {
        // handler repeat and rotate
        if (repeat) {
          const newArgs = {
            ...args[0],
            reverse: !args[0].reverse,
            repeat: --args[0].repeat,
            autoFit: false
          } as animatePathArgs;
          const next = await animationPath(newArgs);
          updateController && updateController(next, animation);
        } else {
          animationEndCallback && animationEndCallback(e);
        }
        animation.dispose();
        // @ts-ignore
        e.target.dispose();
      }
    }
  );
  // @ts-ignore
  const controller = layer.animateFeature(
    pointFeature,
    animation
  ) as animationControler;
  updateController && updateController(controller, animation);
  // @ts-ignore
  controller._stop = controller.stop;
  controller.stop = function () {
    isStop = true;
    // @ts-ignore
    this._stop();
  };
  // @ts-ignore
  controller._start = controller.start;
  controller.start = function () {
    isStop = false;
    // @ts-ignore
    this._start();
  };

  return controller;
}
