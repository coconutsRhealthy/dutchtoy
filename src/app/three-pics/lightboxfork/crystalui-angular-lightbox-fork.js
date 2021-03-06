import { __decorate } from 'tslib';
import { Injectable, Input, HostBinding, ViewChild, Component, EventEmitter, ElementRef, ChangeDetectorRef, HostListener, ComponentFactoryResolver, ApplicationRef, Injector, Output, Directive, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaySubject } from 'rxjs';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["imageFirst"];
const _c1 = ["imageSecond"];
const _c2 = ["imageLast"];
const _c3 = ["lightboxImage"];
const _c4 = ["prevImageElem"];
const _c5 = ["lightboxContainer"];
function LightboxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.counter);
} }
function LightboxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("click", function LightboxComponent_div_1_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.closeLightbox(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.closeButtonText);
} }
function LightboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 13);
} }
function LightboxComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵelement(1, "div", 13);
    ɵngcc0.ɵɵelementEnd();
} }
function LightboxComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtext(1, "Failed to load image");
    ɵngcc0.ɵɵelementEnd();
} }
let EventService = class EventService {
    constructor() {
        this.emitter = new ReplaySubject(1);
    }
    emitChangeEvent(data) {
        this.emitter.next(data);
    }
};
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: EventService, factory: function (t) { return EventService.ɵfac(t); } });

class Utils {
    static mobileCheck() {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true; })(navigator.userAgent || navigator.vendor);
        return check;
    }
    ;
}

let LightboxCommonComponent = class LightboxCommonComponent {
    constructor(eventService) {
        this.eventService = eventService;
        this.currentImageIndex = 0;
        this.indexCurrentSlide = 1;
        this.containerStyles = {
            transition: '',
            transform: '',
            width: '',
            height: '',
            opacity: ''
        };
        this.currImageLoadingState = 'not-loaded';
        this.isMobile = Utils.mobileCheck();
    }
    get lightboxImage() {
        return this._lightboxImage;
    }
    get lightboxImageElement() {
        if (this.lightboxImage) {
            return this.lightboxImage.nativeElement;
        }
    }
    get lightboxImageNaturalHeight() {
        if (this.lightboxImageElement) {
            return this.lightboxImageElement.naturalHeight;
        }
    }
    get lightboxImageNaturalWidth() {
        if (this.lightboxImageElement) {
            return this.lightboxImageElement.naturalWidth;
        }
    }
    get index() {
        return this.currentImageIndex;
    }
    get properties() {
        return this.lightboxData.properties;
    }
    get images() {
        return this.lightboxData.images || [this.lightboxData.image];
    }
    get thumbnailImage() {
        return this.images[this.currentImageIndex].nativeElement;
    }
    get thumbnailImagePosition() {
        return this.thumbnailImage.getBoundingClientRect();
    }
    // Image size if it is larger than the window size
    get virtualImageDimension() {
        let height = this.lightboxImageNaturalHeight;
        let width = height * this.imageAspectRatio;
        const windowWidth = document.body.clientWidth;
        const windowHeight = window.innerHeight;
        if (this.isImageLargerWindow) {
            if (height > windowHeight) {
                height = windowHeight;
                width = height * this.imageAspectRatio;
            }
            if (width > windowWidth) {
                width = windowWidth;
                height = width / this.imageAspectRatio;
            }
        }
        else {
            width = this.lightboxImageNaturalWidth;
            height = this.lightboxImageNaturalHeight;
        }
        if (width === 0 || Number.parseInt(height) === 0) {
            return { width: 200, height: 200 };
        }
        return { width, height };
    }
    get containerInitialPosition() {
        const scale = (this.showState === 'initial-thumbnail-image') ? 1 : this.containerScale;
        const top = this.thumbnailImagePosition.top;
        const left = this.thumbnailImagePosition.left;
        return 'matrix(' + scale + ', 0, 0, ' + scale + ',' + left + ',' + top + ')';
    }
    get containerFullscreenPosition() {
        const left = (document.body.clientWidth - this.virtualImageDimension.width) / 2;
        const top = (window.innerHeight - this.virtualImageDimension.height) / 2;
        return 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    }
    get containerScale() {
        return this.thumbnailImagePosition.width / this.virtualImageDimension.width;
    }
    get imageAspectRatio() {
        return this.thumbnailImage.naturalWidth / this.thumbnailImage.naturalHeight;
    }
    get isImageLargerWindow() {
        const imageNaturalWidth = this.lightboxImageNaturalWidth;
        const imageNaturalHeight = this.lightboxImageNaturalHeight;
        const windowWidth = document.body.clientWidth;
        const windowHeight = window.innerHeight;
        return imageNaturalWidth > windowWidth || imageNaturalHeight > windowHeight;
    }
    get isFirstImage() {
        if (this.properties.loop) {
            return false;
        }
        else {
            return this.index === 0;
        }
    }
    get isLastImage() {
        if (this.properties.loop) {
            return false;
        }
        else {
            return this.index === this.latestImageIndex;
        }
    }
    get latestImageIndex() {
        return this.images.length - 1;
    }
    get backgroundColor() {
        const opacity = this.properties.backgroundOpacity;
        const color = this.properties.backgroundColor;
        if (color === 'black') {
            return 'rgba(0, 0, 0, ' + opacity + ')';
        }
        else {
            return 'rgba(255, 255, 255, ' + opacity + ')';
        }
    }
    get animationDuration() {
        const animationDuration = this.properties.animationDuration;
        if (typeof animationDuration === "string") {
            return Number.parseInt(animationDuration);
        }
        else {
            return animationDuration;
        }
    }
    get animationMode() {
        if (this.currImageLoadingState === 'error') {
            return 'default';
        }
        return this.properties.animationMode;
    }
    get animationTimingFunction() {
        return this.properties.animationTimingFunction;
    }
    get closeButtonText() {
        return this.properties.closeButtonText;
    }
    get counterSeparator() {
        return this.properties.counterSeparator;
    }
    get counter() {
        return this.currentImageIndex + 1 + this.counterSeparator + this.images.length;
    }
    emitState(type, state) {
        if (state === 'initial-virtual-image' ||
            state === 'initial-styles') {
            return;
        }
        if (state === 'initial-default' ||
            state === 'initial-thumbnail-image') {
            state = 'initial';
        }
        this.eventService.emitChangeEvent({
            type: type + ':' + state
        });
    }
    setShowState(state) {
        this.showState = state;
        this.emitState('show-state', state);
    }
    setClosingState(state) {
        this.closingState = state;
        this.emitState('closing-state', state);
    }
    setAnimationDuration() {
        this.hostStyleTransition = 'background-color ' + this.animationDuration + 'ms';
        this.containerStyles.transition = 'all ' + this.animationDuration + 'ms ' + this.animationTimingFunction;
    }
    setBackgroundColor() {
        this.hostStyleBackgroundColor = this.backgroundColor;
    }
    getContainerHeight() {
        return this.thumbnailImagePosition.height / this.containerScale + 'px';
    }
    showThumbnailImage() {
        this.thumbnailImage.style.opacity = '';
    }
    hideThumbnailImage() {
        this.thumbnailImage.style.opacity = 0;
    }
    updateThumbnailPosition() {
        this.containerStyles.transform = this.containerInitialPosition;
    }
};
LightboxCommonComponent.ɵfac = function LightboxCommonComponent_Factory(t) { return new (t || LightboxCommonComponent)(ɵngcc0.ɵɵdirectiveInject(EventService)); };
LightboxCommonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LightboxCommonComponent, selectors: [["lightbox-common"]], viewQuery: function LightboxCommonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
        ɵngcc0.ɵɵstaticViewQuery(_c1, true);
        ɵngcc0.ɵɵstaticViewQuery(_c2, true);
        ɵngcc0.ɵɵstaticViewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._imageFirst = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._imageSecond = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._imageLast = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._lightboxImage = _t.first);
    } }, hostVars: 4, hostBindings: function LightboxCommonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("transition", ctx.hostStyleTransition)("background-color", ctx.hostStyleBackgroundColor);
    } }, inputs: { lightboxData: "lightboxData" }, decls: 0, vars: 0, template: function LightboxCommonComponent_Template(rf, ctx) { }, encapsulation: 2 });
LightboxCommonComponent.ctorParameters = () => [
    { type: EventService }
];
__decorate([
    Input()
], LightboxCommonComponent.prototype, "lightboxData", void 0);
__decorate([
    HostBinding('style.backgroundColor')
], LightboxCommonComponent.prototype, "hostStyleBackgroundColor", void 0);
__decorate([
    HostBinding('style.transition')
], LightboxCommonComponent.prototype, "hostStyleTransition", void 0);
__decorate([
    ViewChild('imageFirst', { static: true })
], LightboxCommonComponent.prototype, "_imageFirst", void 0);
__decorate([
    ViewChild('imageSecond', { static: true })
], LightboxCommonComponent.prototype, "_imageSecond", void 0);
__decorate([
    ViewChild('imageLast', { static: true })
], LightboxCommonComponent.prototype, "_imageLast", void 0);
__decorate([
    ViewChild('lightboxImage', { static: true })
], LightboxCommonComponent.prototype, "_lightboxImage", void 0);

let LightboxComponent = class LightboxComponent extends LightboxCommonComponent {
    constructor(elementRef, ref, eventService) {
        super(eventService);
        this.elementRef = elementRef;
        this.ref = ref;
        this.eventService = eventService;
        this.spinnerHeight = 30;
        this.minTimeout = 30;
        this.preloaderTimeout = 100;
        this.spinnerStyles = {
            transform: ''
        };
        this.configThumbnailPreloader = true;
        this.events = new EventEmitter();
        this.hostShown = false;
        this.hideControls = false;
    }
    get simpleMode() {
        return this.properties.simpleMode;
    }
    get hostLightTheme() {
        return this.properties.backgroundColor === 'white';
    }
    get currImagePath() {
        let image = this.images[this.index];
        let path;
        if (!image) {
            return false;
        }
        if (image.fullImage && image.fullImage.path) {
            path = image.fullImage.path;
        }
        else if (image.thumbnailImage && image.thumbnailImage.path) {
            path = image.thumbnailImage.path;
        }
        else if (image.path) {
            path = image.path;
        }
        return path;
    }
    get prevImagePath() {
        return this.images[this.prevIndex];
    }
    set prevImagePath(value) {
        this.images[this.prevIndex] = value;
    }
    get isHiddenPrevArrow() {
        return this.isFirstImage && !this.properties.loop || this.isZoomIn;
    }
    get isHiddenNextArrow() {
        return this.isLastImage && !this.properties.loop || this.isZoomIn;
    }
    get isPreloader() {
        return this.animationMode === 'zoom-preloader' &&
            this.showState != 'animation-end' &&
            this.currImageLoadingState === 'loading';
    }
    get imageOrientation() {
        if (this.thumbnailImage.naturalWidth > this.thumbnailImage.naturalHeight) {
            return 'horizontal';
        }
        else {
            return 'vertical';
        }
    }
    scrolling() {
        if (this.showState === 'initial-thumbnail-image' ||
            this.showState === 'initial-virtual-image' ||
            this.closingState === 'animation') {
            this.updateThumbnailPosition();
        }
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'ArrowLeft':
                this.prev();
                break;
            case 'ArrowRight':
                this.next();
                break;
            case 'Escape':
                this.closeLightbox();
                break;
        }
    }
    onMouseEnter(event) {
        this.hideControls = false;
    }
    transitionEnd(event) {
        if (event.propertyName === "transform" && this.hostAnimation) {
            this.hostAnimation = false;
        }
    }
    ngOnInit() {
        this.currentImageIndex = this.properties.index;
        this.initialLightbox();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.currImageLoadingState === 'not-loaded') {
                this.currImageLoadingState = 'loading';
            }
        }, this.preloaderTimeout);
        // Mode: default
        if (this.animationMode === 'default') {
            setTimeout(() => {
                this.showLightboxAnimation();
            }, this.minTimeout);
        }
    }
    onImageLoaded() {
        // When opening lightbox
        if (this.animationMode === 'zoom-preloader' &&
            this.showState === 'initial-thumbnail-image') {
            this.initialLightboxVirtualImage();
            setTimeout(() => {
                this.currImageLoadingState = 'uploaded';
                this.showLightboxAnimation();
                if (this.properties.hideThumbnail) {
                    this.hideThumbnailImage();
                }
            }, this.minTimeout);
        }
        // When opening next / previous image
        if (this.showState === 'animation-end') {
            this.currImageLoadingState = 'uploaded';
            if (this.properties.hideThumbnail) {
                this.hideThumbnailImage();
            }
        }
        this.ref.detectChanges();
    }
    onImageError(event) {
        this.currImageLoadingState = 'error';
        this.initialLightboxDefault();
        setTimeout(() => {
            this.showLightboxAnimation();
        }, this.minTimeout);
    }
    onContainerClick(event) {
        if (event.target === this.lightboxContainerElem.nativeElement || this.simpleMode) {
            this.closeLightbox();
        }
    }
    initialLightbox() {
        this.setMaxDimensions();
        this.setAnimationDuration();
        switch (this.animationMode) {
            case 'zoom-preloader':
                this.initialLightboxThumbnailImage();
                break;
            case 'default':
                this.initialLightboxDefault();
                break;
        }
    }
    initialLightboxDefault() {
        this.showState = 'initial-default';
        this.containerStyles = {
            transform: 'translate3d(0, 0, 0)',
            height: '100%',
            width: '100%',
            opacity: '0'
        };
        // next step: AfterViewInit
    }
    initialLightboxVirtualImage() {
        this.setShowState('initial-virtual-image');
        this.containerStyles = {
            transform: this.containerInitialPosition,
            height: this.virtualImageDimension.height + 'px',
            width: this.virtualImageDimension.width + 'px'
        };
        // next step: onImageLoaded() -> showLightboxAnimation()
    }
    initialLightboxThumbnailImage() {
        this.setShowState('initial-thumbnail-image');
        this.containerStyles = {
            transform: this.containerInitialPosition,
            height: this.thumbnailImagePosition.height + 'px',
            width: this.thumbnailImagePosition.width + 'px'
        };
        // next step: onImageLoaded()
    }
    showLightboxAnimation() {
        this.hostAnimation = true;
        this.setShowState('animation');
        this.hostShown = true;
        this.setBackgroundColor();
        this.setAnimationDuration();
        // Mode: zoom preloader
        if (this.animationMode === 'zoom-preloader' &&
            this.currImageLoadingState !== 'error') {
            this.containerStyles.transform = this.containerFullscreenPosition;
        }
        // Mode: default
        if (this.animationMode === 'default') {
            this.containerStyles.opacity = '1';
        }
        // next step: handleLightboxTransitionEnd
    }
    showLightboxAnimationEnd() {
        this.setShowState('animation-end');
        this.containerStyles = {
            transform: 'translate3d(0, 0, 0)',
            height: '100%',
            width: '100%',
        };
    }
    closeLightbox() {
        //begin forked izostuff
        window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
        //end forked izostuff
        this.setClosingState('initial');
        this.hostShown = false;
        this.closeLightboxInitial();
    }
    closeLightboxInitial() {
        this.setClosingState('initial-styles');
        // Mode: zoom preloader
        if (this.animationMode === 'zoom-preloader') {
            this.containerStyles = {
                transform: this.containerFullscreenPosition,
                height: this.virtualImageDimension.height + 'px',
                width: this.virtualImageDimension.width + 'px',
            };
        }
        // Mode: default
        if (this.animationMode === 'default') {
            this.containerStyles.opacity = '1';
        }
        setTimeout(() => {
            this.closeLightboxAnimation();
        }, this.minTimeout);
    }
    closeLightboxAnimation() {
        this.setClosingState('animation');
        // Mode: zoom preloader
        if (this.animationMode === 'zoom-preloader') {
            this.hostAnimation = true;
            this.containerStyles = {
                transform: this.containerInitialPosition,
                height: this.getContainerHeight(),
                width: this.getContainerWidth(),
            };
            this.hostStyleBackgroundColor = '';
        }
        // Mode: default
        if (this.animationMode === 'default') {
            this.hostAnimation = true;
            this.containerStyles.opacity = '0';
            this.hostStyleBackgroundColor = '';
        }
        this.setAnimationDuration();
        // next step: handleLightboxTransitionEnd
        if (this.animationDuration === 0) { // in the future, change to a type conversion getter
            this.closeLightboxAnimationEnd();
        }
    }
    closeLightboxAnimationEnd() {
        this.setClosingState('animation-end');
        this.events.emit({ type: 'close' });
        // Mode: zoom preloader
        if (this.animationMode === 'zoom-preloader') {
            this.showThumbnailImage();
        }
    }
    /*
     * Transition End
     */
    handleLightboxTransitionEnd(event) {
        if (this.showState === 'animation') {
            this.showLightboxAnimationEnd();
        }
        // Last close step
        if (this.closingState === 'animation') {
            this.closeLightboxAnimationEnd();
        }
    }

    //begin forked izostuff
    changeUrlNumber(currentUrl, positiveIncrement) {
      var incrementValue;

      if(positiveIncrement) {
        incrementValue = 3;
      } else {
        incrementValue = -3;
      }

      var currentNumberInUrl = currentUrl.substr(currentUrl.lastIndexOf("/") + 1, currentUrl.length);
      var numberToUse = Number(currentNumberInUrl) + incrementValue;
      var urlToReturn = currentUrl.substr(0, currentUrl.lastIndexOf("/") + 1) + numberToUse;

      return urlToReturn;
    }
    //end forked izostuff

    next() {
        //begin forked izostuff
        window.location.href = this.changeUrlNumber(window.location.href, true);
        //end forked izostuff

        if (this.animationMode === 'zoom-preloader') {
            this.showThumbnailImage();
        }
        if (this.isLastImage) {
            if (this.properties.loop) {
                this.currentImageIndex = 0;
            }
            else {
                return;
            }
        }
        else {
            this.currentImageIndex++;
            this.currImageLoadingState = 'loading';
        }
        setTimeout(() => {
            if (this.currImageLoadingState !== 'uploaded') {
                this.currImageLoadingState = 'loading';
            }
        }, this.preloaderTimeout);
    }
    prev() {
        //begin forked izostuff
        window.location.href = this.changeUrlNumber(window.location.href, false);
        //end forked izostuff

        if (this.animationMode === 'zoom-preloader') {
            this.showThumbnailImage();
        }
        if (this.isFirstImage) {
            if (this.properties.loop) {
                this.currentImageIndex = this.latestImageIndex;
            }
            else {
                return;
            }
        }
        else {
            this.currentImageIndex--;
            this.currImageLoadingState = 'loading';
        }
        setTimeout(() => {
            if (this.currImageLoadingState !== 'uploaded') {
                this.currImageLoadingState = 'loading';
            }
        }, this.preloaderTimeout);
    }
    setMaxDimensions() {
        this.lightboxImage.nativeElement.style.maxHeight = 'calc(' + this.properties.imageMaxHeight + ')';
        this.lightboxImage.nativeElement.style.maxWidth = this.properties.imageMaxWidth;
    }
    handlePinchZoomEvents(event) {
        if (event.type === "zoom-in") {
            this.isZoomIn = true;
        }
        if (event.type === "zoom-out") {
            this.isZoomIn = false;
        }
    }
    getContainerWidth() {
        return this.thumbnailImagePosition.width / this.containerScale + 'px';
    }
};
LightboxComponent.ɵfac = function LightboxComponent_Factory(t) { return new (t || LightboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(EventService)); };
LightboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LightboxComponent, selectors: [["crystal-lightbox"]], viewQuery: function LightboxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c4, true);
        ɵngcc0.ɵɵstaticViewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.prevImageElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.lightboxContainerElem = _t.first);
    } }, hostVars: 12, hostBindings: function LightboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("scroll", function LightboxComponent_scroll_HostBindingHandler() { return ctx.scrolling(); }, false, ɵngcc0.ɵɵresolveWindow)("keydown", function LightboxComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, ɵngcc0.ɵɵresolveWindow)("mouseenter", function LightboxComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event); })("transitionend", function LightboxComponent_transitionend_HostBindingHandler($event) { return ctx.transitionEnd($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("background-color", ctx.hostStyleBackgroundColor);
        ɵngcc0.ɵɵclassProp("lightbox-shown", ctx.hostShown)("lightbox-hide-controls", ctx.hideControls)("lightbox-simple-mode", ctx.simpleMode)("lightbox-light", ctx.hostLightTheme)("lightbox-animation", ctx.hostAnimation);
    } }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 11, consts: [["class", "lightbox-counter", 4, "ngIf"], ["class", "lightbox-close", 3, "click", 4, "ngIf"], ["class", "lightbox-spinner", 4, "ngIf"], [1, "lightbox-container", 3, "ngStyle", "transitionend", "click"], ["lightboxContainer", ""], ["class", "lightbox-preloader", 4, "ngIf"], ["class", "lightbox-error", 4, "ngIf"], [1, "lightbox-curr-image", 3, "src", "load", "error"], ["lightboxImage", ""], [1, "lightbox-prev", 3, "hidden", "click"], [1, "lightbox-next", 3, "hidden", "click"], [1, "lightbox-counter"], [1, "lightbox-close", 3, "click"], [1, "lightbox-spinner"], [1, "lightbox-preloader"], [1, "lightbox-error"]], template: function LightboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, LightboxComponent_div_0_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵtemplate(1, LightboxComponent_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, LightboxComponent_div_2_Template, 1, 0, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵlistener("transitionend", function LightboxComponent_Template_div_transitionend_3_listener($event) { return ctx.handleLightboxTransitionEnd($event); })("click", function LightboxComponent_Template_div_click_3_listener($event) { return ctx.onContainerClick($event); });
        ɵngcc0.ɵɵtemplate(5, LightboxComponent_div_5_Template, 2, 0, "div", 5);
        ɵngcc0.ɵɵtemplate(6, LightboxComponent_div_6_Template, 2, 0, "div", 6);
        ɵngcc0.ɵɵelementStart(7, "img", 7, 8);
        ɵngcc0.ɵɵlistener("load", function LightboxComponent_Template_img_load_7_listener() { return ctx.onImageLoaded(); })("error", function LightboxComponent_Template_img_error_7_listener($event) { return ctx.onImageError($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_div_click_9_listener() { return ctx.prev(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 10);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_div_click_10_listener() { return ctx.next(); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.properties.counter && ctx.images.length > 1);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.simpleMode);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.currImageLoadingState === "loading" && ctx.showState === "animation-end");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.containerStyles);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isPreloader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.currImageLoadingState === "error" && !ctx.closingState);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("lightbox-show", ctx.currImageLoadingState === "uploaded");
        ɵngcc0.ɵɵproperty("src", ctx.currImagePath, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", ctx.isHiddenPrevArrow);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("hidden", ctx.isHiddenNextArrow);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle], styles: [".lightbox-spinner[_ngcontent-%COMP%], .lightbox-spinner[_ngcontent-%COMP%]:after, .lightbox-spinner[_ngcontent-%COMP%]:before{border-radius:50%;width:10px;height:10px;-webkit-animation:1.5s ease-in-out infinite lightbox-load;animation:1.5s ease-in-out infinite lightbox-load}.lightbox-spinner[_ngcontent-%COMP%]{color:#fff;font-size:10px;margin:0 auto 20px;position:relative;text-indent:-9999em;transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.lightbox-spinner[_ngcontent-%COMP%]:after, .lightbox-spinner[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0}.lightbox-spinner[_ngcontent-%COMP%]:before{left:-32px;-webkit-animation-delay:-.32s;animation-delay:-.32s}.lightbox-spinner[_ngcontent-%COMP%]:after{left:32px}@-webkit-keyframes lightbox-load{0%,100%,80%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}@keyframes lightbox-load{0%,100%,80%{box-shadow:0 10px 0 -1.3em}40%{box-shadow:0 10px 0 0}}.lightbox-shown[_nghost-%COMP%]{opacity:1}.lightbox-shown[_nghost-%COMP%]   .lightbox-close[_ngcontent-%COMP%], .lightbox-shown[_nghost-%COMP%]   .lightbox-next[_ngcontent-%COMP%], .lightbox-shown[_nghost-%COMP%]   .lightbox-prev[_ngcontent-%COMP%]{opacity:.5;transition-delay:.1s}.lightbox-shown[_nghost-%COMP%]   .lightbox-close[_ngcontent-%COMP%]:hover, .lightbox-shown[_nghost-%COMP%]   .lightbox-next[_ngcontent-%COMP%]:hover, .lightbox-shown[_nghost-%COMP%]   .lightbox-prev[_ngcontent-%COMP%]:hover{opacity:1;transition-delay:0}.lightbox-shown[_nghost-%COMP%]   .lightbox-counter[_ngcontent-%COMP%]{opacity:1}.lightbox-hide-controls[_nghost-%COMP%]   .lightbox-close[_ngcontent-%COMP%], .lightbox-hide-controls[_nghost-%COMP%]   .lightbox-next[_ngcontent-%COMP%], .lightbox-hide-controls[_nghost-%COMP%]   .lightbox-prev[_ngcontent-%COMP%]{opacity:0}.lightbox-simple-mode[_nghost-%COMP%]   .lightbox-container[_ngcontent-%COMP%]{cursor:zoom-out}[_nghost-%COMP%]:not(.lightbox-animation)   .lightbox-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;top:0;left:0;height:100%}.lightbox-light[_nghost-%COMP%]{color:#000;text-shadow:none}[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;color:#fff;text-shadow:0 0 1px rgba(0,0,0,.65);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10000}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{opacity:1;max-width:100%;max-height:100%}[_nghost-%COMP%]   img.lightbox-curr-image.lightbox-show[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   img.lightbox-curr-image[_ngcontent-%COMP%]{opacity:0;z-index:10}[_nghost-%COMP%]   .lightbox-container.lightbox-hide[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .lightbox-container[_ngcontent-%COMP%]{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transform-origin:top left}[_nghost-%COMP%]   .lightbox-preloader[_ngcontent-%COMP%]{background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;width:100%;height:100%;position:absolute}[_nghost-%COMP%]   .lightbox-spinner[_ngcontent-%COMP%]{position:absolute;top:51%;left:50%;margin-top:-15px;margin-left:-5px}[_nghost-%COMP%]   .lightbox-preloader[_ngcontent-%COMP%]   .lightbox-spinner[_ngcontent-%COMP%]{margin-top:-9px;margin-left:-3px}[_nghost-%COMP%]   .lightbox-preloader[_ngcontent-%COMP%]   .lightbox-spinner[_ngcontent-%COMP%], [_nghost-%COMP%]   .lightbox-preloader[_ngcontent-%COMP%]   .lightbox-spinner[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .lightbox-preloader[_ngcontent-%COMP%]   .lightbox-spinner[_ngcontent-%COMP%]:before{width:6px;height:6px}[_nghost-%COMP%]   .lightbox-preloader[_ngcontent-%COMP%]   .lightbox-spinner[_ngcontent-%COMP%]:before{left:-21px}[_nghost-%COMP%]   .lightbox-preloader[_ngcontent-%COMP%]   .lightbox-spinner[_ngcontent-%COMP%]:after{left:21px}[_nghost-%COMP%]   .lightbox-counter[_ngcontent-%COMP%]{text-align:left;position:absolute;left:22px;top:13px;font-size:14px;z-index:30}[_nghost-%COMP%]   .lightbox-description[_ngcontent-%COMP%]{text-align:center;max-width:calc(100% - 200px);margin:0 auto;font-size:14px;line-height:43px;position:relative;z-index:50}[_nghost-%COMP%]   .lightbox-error[_ngcontent-%COMP%]{color:rgba(255,255,255,.75);font-size:19px}[_nghost-%COMP%]   .lightbox-close[_ngcontent-%COMP%]{position:absolute;top:0;right:0;padding:13px 22px;font-size:13px;text-transform:uppercase;cursor:pointer;opacity:.5;z-index:30;transition:opacity .1s ease-in-out}[_nghost-%COMP%]   .lightbox-next[_ngcontent-%COMP%], [_nghost-%COMP%]   .lightbox-prev[_ngcontent-%COMP%]{width:100px;height:100%;position:absolute;top:0;cursor:pointer;opacity:.5;z-index:20;transition:opacity .1s ease-in-out;-webkit-tap-highlight-color:rgba(255,255,255,0)}[_nghost-%COMP%]   .lightbox-prev[_ngcontent-%COMP%]{left:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAiCAYAAABbXymAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMzMTZCQzFERDgzMTExRTc5QUYxQTUxRDI5MkM5ODZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMzMTZCQzFFRDgzMTExRTc5QUYxQTUxRDI5MkM5ODZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzMxNkJDMUJEODMxMTFFNzlBRjFBNTFEMjkyQzk4NkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzMxNkJDMUNEODMxMTFFNzlBRjFBNTFEMjkyQzk4NkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7VrwZKAAAClElEQVR42qzWSY8SQRgGYLoVHPeTXlwCiIwMArJGtiABNep4IGZi4oEfMJooLjePrnFGf5yJS0hYmq2b/aBxiQ6+lRRJdaUZq5vp5E2TLnioVFd9VZLN+iUxIdeMiW2fRVCmvz2DpJBVCk6X6SVBHQRLpVKb7Xb782g0Usrl8jM8W0P20+9YQn3JZPIhwN6MXoPBoI3nG8iKGZhF14A+AqrOmKtWq31F213kkOgQ69B0Ol0BqrFot9vV/H7/c7RfEoVZ1G+EdjqdvtfrfYn2K8gJkaHQodlstjIej/ssihdH0Ddov4acQo7QlycJo5PJhEc1j8fzmqJk2h1D7Lv1lkUv5nK5xzzaarWMUIcwms/nCTrgUbfbTdCrVtAAQafTqQ5VFEVdCi0UCk/Q0yGLNptN1el0vqLoaRHUxqPoKY/2KFo0g0r0ba4Wi8WnQEcs2mg0VAPULrJsZTqpNzDZ6yxar9dVl8tFVtR10SnFohJdgnZYuh9IkjSTZfknPn5DviO/kL/IjkgtIOhhJJ7JZF5gdU24hdDG6qqg/QJywEzlmg/FSTLhE4nE9nA4nHJFRvH5fJto94gOBfvyjtJxXI/H4x+A63re6/UUVDCCnzeDz6fbceQscjsWi703wFsM7hDBJQN8PRqNbmNn0OGapu0JfoviYx4PBAL30e5dCg+Hw0Z4e8/wfr/P451QKPRgaRzIFjDdksefsbjdKn5zER6JRMiwuP+3Ne2KB4PBLVVVR1xd+YK2O2bOFYvwd8CHbK/x/J6Zc8Ui/AZmxdtqtdrAwlFLpRLZrS/PYcnkEUuiY7hCS+g5sovT55+Qj7QS/jYD8zjp/UF6t9GS+oPed8zCLC5zJ0tSo//Q+8wKLHTw/ifAAMQVS4vHZR2VAAAAAElFTkSuQmCC) center left 22px no-repeat}[_nghost-%COMP%]   .lightbox-next[_ngcontent-%COMP%]{right:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAiCAYAAABbXymAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyNDE3MDE1RDgzMTExRTc5NjM4QTIzQzI2Rjc2Qjg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyNDE3MDE2RDgzMTExRTc5NjM4QTIzQzI2Rjc2Qjg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTI0MTcwMTNEODMxMTFFNzk2MzhBMjNDMjZGNzZCODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTI0MTcwMTREODMxMTFFNzk2MzhBMjNDMjZGNzZCODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zv5BKAAACl0lEQVR42rTW224SQRwGcHZb8FT1Sm88BJCiFAE5JpyCBNRE8coYEy94AGqi9XDXS0+JVh/CB/EhiFET5LjAclgWjaa1aazfJDM6u6LuLjrJl2124cd0duY/I9h+NoELabtcTLcFCon0bw+SRE4h28hn2xyNoIvISrlcfqAoSluSpLepVKqCe6cRB/2MYAXei1wfjUbSLm34gX4ymbyN+z6rOBmC/ciNer3+fpdrwGXgd8h/YwVn8Dm/37/e6/UGOnyQTqfXrOBsKI4g571e76Nutzv8De43gwv05S0hx5CLwJ/iBWrwyWQyzGazpnHyITtyCDlBcI/H8wS4ZlhUVbWMO/R4p9P5Bc/lcnfx/Ow8+AW32z0LH+Xz+X+Dt9ttmcen0ynDA1bx4wR3Op2PW62WrOv5uFAo3JsXL1K8r+v5LNxmZrb8wJvNpn5YlGKxeJ/WFruZBcRPxUsul2u90WhocCyqBqk3dLGJiwbgb/T6FflCSqkoiluCIGjqNGzWgQUz9YR8aQ9yBqtyDQtH0q1KNZPJPMTzOHKA4oaHwuPz+SooUm0eHY/H00QisUEWFHKUDYVRdBmVr9Lv9/WoGo/HX+J5iY7/QSMvj003hnb0aCwWe4HnV5GTyGEj002DDgYDDYqdRo1Goxu0p3pU+BvqDQQCqzPQCUWvzINKejQcDltHQ6HQLaBdHh0Oh5ZRO0OBaFD8iIL7z82ibGtyRyKR1T+gl82g/GZ6Dev/HY/KsqwEg0FLKL/93+R7C3QM9Nk8KDtiOWq12jb2s2XS01Kp9Kparb7G/TfIR2QT2TF6UBS42bBEi/UK/SIBPyCfkC0zKA+z6rWPXm30tLlJr6ZQ/ZmYDYnI1eEdejV9Thb+18H7uwADAOG/Wcm4x+knAAAAAElFTkSuQmCC) center right 22px no-repeat}[_nghost-%COMP%]   .lightbox-close[_ngcontent-%COMP%], [_nghost-%COMP%]   .lightbox-counter[_ngcontent-%COMP%], [_nghost-%COMP%]   .lightbox-next[_ngcontent-%COMP%], [_nghost-%COMP%]   .lightbox-prev[_ngcontent-%COMP%]{opacity:0;transition:opacity 150ms cubic-bezier(.475,.105,.445,.945)}"] });
LightboxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: EventService }
];
__decorate([
    HostBinding('class.lightbox-shown')
], LightboxComponent.prototype, "hostShown", void 0);
__decorate([
    HostBinding('class.lightbox-hide-controls')
], LightboxComponent.prototype, "hideControls", void 0);
__decorate([
    HostBinding('class.lightbox-animation')
], LightboxComponent.prototype, "hostAnimation", void 0);
__decorate([
    HostBinding('class.lightbox-simple-mode')
], LightboxComponent.prototype, "simpleMode", null);
__decorate([
    HostBinding('class.lightbox-light')
], LightboxComponent.prototype, "hostLightTheme", null);
__decorate([
    HostBinding('style.backgroundColor')
], LightboxComponent.prototype, "hostStyleBackgroundColor", void 0);
__decorate([
    ViewChild('prevImageElem', { static: true })
], LightboxComponent.prototype, "prevImageElem", void 0);
__decorate([
    ViewChild('lightboxContainer', { static: true })
], LightboxComponent.prototype, "lightboxContainerElem", void 0);
__decorate([
    HostListener('window:scroll')
], LightboxComponent.prototype, "scrolling", null);
__decorate([
    HostListener('window:keydown', ['$event'])
], LightboxComponent.prototype, "onKeyDown", null);
__decorate([
    HostListener("mouseenter", ['$event'])
], LightboxComponent.prototype, "onMouseEnter", null);
__decorate([
    HostListener('transitionend', ['$event'])
], LightboxComponent.prototype, "transitionEnd", null);

const DefaultProperties = {
    loop: false,
    index: 0,
    counter: false,
    imageMaxHeight: "100%",
    imageMaxWidth: "100%",
    animationDuration: 350,
    animationMode: 'zoom-preloader',
    animationTimingFunction: 'cubic-bezier(0.475, 0.105, 0.445, 0.945)',
    closeButtonText: 'Close',
    counterSeparator: '/',
    disable: false,
    simpleMode: false,
    backgroundColor: 'black',
    backgroundOpacity: 1,
    hideThumbnail: true,
    gestureEnable: false
};

let CrystalLightbox = class CrystalLightbox {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    appendComponentToBody(component, lightboxData) {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        componentRef.instance.lightboxData = lightboxData;
        this.appRef.attachView(componentRef.hostView);
        const domElem = componentRef.hostView.rootNodes[0];
        // Add to body
        document.body.appendChild(domElem);
        componentRef.instance.events.subscribe((event) => {
            if (event.type === 'close') {
                this.appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            }
        });
    }
    open(lightboxData) {
        lightboxData.properties = this.applyPropertieDefaults(DefaultProperties, lightboxData.properties);
        let component = this.getLightboxComponent();
        this.appendComponentToBody(component, lightboxData);
    }
    getLightboxComponent() {
        return LightboxComponent;
    }
    applyPropertieDefaults(defaultProperties, properties) {
        if (!properties) {
            properties = {};
        }
        if (!properties.index) {
            properties.index = 0;
        }
        this._defaultProperties = Object.assign({}, defaultProperties);
        return Object.assign(this._defaultProperties, properties);
    }
};
CrystalLightbox.ɵfac = function CrystalLightbox_Factory(t) { return new (t || CrystalLightbox)(ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
CrystalLightbox.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CrystalLightbox, factory: function (t) { return CrystalLightbox.ɵfac(t); } });
CrystalLightbox.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];

let LightboxDirective = class LightboxDirective {
    constructor(lightbox, eventService, elementRef) {
        this.lightbox = lightbox;
        this.eventService = eventService;
        this.elementRef = elementRef;
        this.properties = {};
        this.events = new EventEmitter();
        this.hostLightboxGroup = true;
        this.globalEventsSubscription = this.eventService.emitter.subscribe((event) => {
            this.handleGlobalEvents(event);
        });
    }
    get hostSimpleMode() {
        return this.simpleMode;
    }
    get isGroupImage() {
        return this.elementRef.nativeElement.closest(".lightbox-group");
    }
    onClick(event) {
        if (this.disable) {
            return;
        }
        if (this.isGroupImage) {
            this.eventService.emitChangeEvent({
                type: 'thumbnail:click',
                elementRef: this.elementRef,
                properties: this.properties
            });
        }
        else {
            this.image = this.getImage();
            this.lightbox.open({
                images: [this.image],
                properties: this.properties,
                index: 0
            });
        }
    }
    ngOnChanges(changes) {
        this.properties = Object.assign({}, this.properties, this.getProperties(changes));
    }
    handleGlobalEvents(event) {
        this.events.emit(event);
    }
    getImage() {
        let image = {};
        const nativeElement = this.elementRef.nativeElement;
        if (this.fullImage) {
            image.fullImage = this.fullImage;
        }
        image.thumbnailImage = {
            path: nativeElement.src,
            height: nativeElement.naturalHeight,
            width: nativeElement.naturalWidth
        };
        image.nativeElement = nativeElement;
        return image;
    }
    ;
    getProperties(changes) {
        let properties = {};
        for (var prop in changes) {
            if (prop !== 'fullImage') {
                properties[prop] = changes[prop].currentValue;
            }
        }
        return properties;
    }
};
LightboxDirective.ɵfac = function LightboxDirective_Factory(t) { return new (t || LightboxDirective)(ɵngcc0.ɵɵdirectiveInject(CrystalLightbox), ɵngcc0.ɵɵdirectiveInject(EventService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
LightboxDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LightboxDirective, selectors: [["", "lightbox", ""]], hostVars: 4, hostBindings: function LightboxDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function LightboxDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("lightbox-single", ctx.hostLightboxGroup)("lightbox-simple-mode", ctx.hostSimpleMode);
    } }, inputs: { properties: "properties", fullImage: "fullImage", loop: "loop", backgroundOpacity: "backgroundOpacity", counter: "counter", imageMaxHeight: "imageMaxHeight", imageMaxWidth: "imageMaxWidth", animationDuration: "animationDuration", animationMode: "animationMode", animationTimingFunction: "animationTimingFunction", closeButtonText: "closeButtonText", counterSeparator: "counterSeparator", disable: "disable", simpleMode: "simpleMode", backgroundColor: "backgroundColor", hideThumbnail: "hideThumbnail", gestureEnable: "gestureEnable" }, outputs: { events: "events" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
LightboxDirective.ctorParameters = () => [
    { type: CrystalLightbox },
    { type: EventService },
    { type: ElementRef }
];
__decorate([
    Input()
], LightboxDirective.prototype, "fullImage", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "properties", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "loop", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "backgroundOpacity", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "counter", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "imageMaxHeight", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "imageMaxWidth", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "animationDuration", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "animationMode", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "animationTimingFunction", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "closeButtonText", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "counterSeparator", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "disable", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "simpleMode", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "backgroundColor", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "hideThumbnail", void 0);
__decorate([
    Input()
], LightboxDirective.prototype, "gestureEnable", void 0);
__decorate([
    Output()
], LightboxDirective.prototype, "events", void 0);
__decorate([
    HostBinding('class.lightbox-single')
], LightboxDirective.prototype, "hostLightboxGroup", void 0);
__decorate([
    HostBinding('class.lightbox-simple-mode')
], LightboxDirective.prototype, "hostSimpleMode", null);
__decorate([
    HostListener('click', ['$event'])
], LightboxDirective.prototype, "onClick", null);

let LightboxGroupDirective = class LightboxGroupDirective {
    constructor(eventService, lightbox) {
        this.eventService = eventService;
        this.lightbox = lightbox;
        this.thumbnailImages = [];
        this.images = [];
        this.properties = {};
        this.hostLightboxGroup = true;
        this.globalEventsSubscription = this.eventService.emitter.subscribe((event) => {
            this.handleGlobalEvents(event);
        });
    }
    get lightboxDirectiveList() {
        if (this._lightboxDirectiveList) {
            return this._lightboxDirectiveList.toArray();
        }
        else {
            return [];
        }
    }
    handleGlobalEvents(event) {
        if (event.type === 'thumbnail:click') {
            this.thumbnailImageElement = event.elementRef.nativeElement;
            this.thumbnailImages = this.getThumbnailImages();
            this.thumbnailImageIndex = this.getThumbnailImageIndex(this.thumbnailImageElement);
            if (this.thumbnailImageIndex == undefined) {
                return;
            }
            this.thumbnailLightboxDirective = this.getThumbnailLightboxDirective(this.thumbnailImageIndex);
            this.images = this.getImages();
            this.properties = event.properties;
            this.properties.index = this.thumbnailImageIndex;
            this.lightbox.open({
                images: this.images,
                //index: this.thumbnailImageIndex,
                properties: this.properties
            });
        }
    }
    getThumbnailImageIndex(element) {
        const images = this.thumbnailImages;
        for (var i = 0; i < images.length; i++) {
            if (element === images[i]) {
                return i;
            }
        }
    }
    getThumbnailLightboxDirective(index) {
        return this.lightboxDirectiveList[index];
    }
    getThumbnailImages() {
        let thumbnailImages = [];
        this.lightboxDirectiveList.forEach(el => {
            thumbnailImages.push(el['elementRef'].nativeElement);
        });
        return thumbnailImages;
    }
    getImages() {
        let images = [];
        this.lightboxDirectiveList.forEach(el => {
            let image = {};
            const nativeElement = el['elementRef'].nativeElement;
            if (el.fullImage) {
                image.fullImage = el.fullImage;
            }
            image.thumbnailImage = {
                path: nativeElement.src,
                height: nativeElement.naturalHeight,
                width: nativeElement.naturalWidth
            };
            image.nativeElement = nativeElement;
            images.push(image);
        });
        return images;
    }
};
LightboxGroupDirective.ɵfac = function LightboxGroupDirective_Factory(t) { return new (t || LightboxGroupDirective)(ɵngcc0.ɵɵdirectiveInject(EventService), ɵngcc0.ɵɵdirectiveInject(CrystalLightbox)); };
LightboxGroupDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LightboxGroupDirective, selectors: [["", "lightbox-group", ""]], contentQueries: function LightboxGroupDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, LightboxDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._lightboxDirectiveList = _t);
    } }, hostVars: 2, hostBindings: function LightboxGroupDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("lightbox-group", ctx.hostLightboxGroup);
    } } });
LightboxGroupDirective.ctorParameters = () => [
    { type: EventService },
    { type: CrystalLightbox }
];
__decorate([
    HostBinding('class.lightbox-group')
], LightboxGroupDirective.prototype, "hostLightboxGroup", void 0);
__decorate([
    ContentChildren(LightboxDirective, { descendants: true })
], LightboxGroupDirective.prototype, "_lightboxDirectiveList", void 0);

let CrystalLightboxModule = class CrystalLightboxModule {
};
CrystalLightboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CrystalLightboxModule });
CrystalLightboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CrystalLightboxModule_Factory(t) { return new (t || CrystalLightboxModule)(); }, providers: [
        CrystalLightbox,
        EventService
    ], imports: [[
            CommonModule
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EventService, [{
        type: Injectable
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LightboxCommonComponent, [{
        type: Component,
        args: [{
                selector: 'lightbox-common',
                template: ''
            }]
    }], function () { return [{ type: EventService }]; }, { hostStyleTransition: [{
            type: HostBinding,
            args: ['style.transition']
        }], hostStyleBackgroundColor: [{
            type: HostBinding,
            args: ['style.backgroundColor']
        }], lightboxData: [{
            type: Input
        }], _imageFirst: [{
            type: ViewChild,
            args: ['imageFirst', { static: true }]
        }], _imageSecond: [{
            type: ViewChild,
            args: ['imageSecond', { static: true }]
        }], _imageLast: [{
            type: ViewChild,
            args: ['imageLast', { static: true }]
        }], _lightboxImage: [{
            type: ViewChild,
            args: ['lightboxImage', { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LightboxComponent, [{
        type: Component,
        args: [{
                selector: 'crystal-lightbox',
                template: "<div class=\"lightbox-counter\" *ngIf=\"properties.counter && images.length > 1\">{{counter}}</div>\n<div class=\"lightbox-close\" *ngIf=\"!simpleMode\" (click)=\"closeLightbox()\">{{closeButtonText}}</div>\n<div class=\"lightbox-spinner\" \n\t*ngIf=\"currImageLoadingState === 'loading' && showState === 'animation-end'\"></div>\n<div class=\"lightbox-container\" \n\t#lightboxContainer\n\t[ngStyle]=\"containerStyles\"\n\t(transitionend)=\"handleLightboxTransitionEnd($event)\"\n\t(click)=\"onContainerClick($event)\">\n\n\t<div class=\"lightbox-preloader\" *ngIf=\"isPreloader\">\n\t\t<div class=\"lightbox-spinner\"></div>\n\t</div>\n\n\t<div class=\"lightbox-error\" *ngIf=\"currImageLoadingState === 'error' && !closingState\">Failed to load image</div>\n\n\t<img class=\"lightbox-curr-image\" \n\t\t#lightboxImage\n\t\t[src]=\"currImagePath\" \n\t\t[class.lightbox-show]=\"currImageLoadingState === 'uploaded'\" \n\t\t(load)=\"onImageLoaded()\"\n\t\t(error)=\"onImageError($event)\" />\n</div>\n\n<div class=\"lightbox-prev\" [hidden]=\"isHiddenPrevArrow\" (click)=\"prev()\"></div>\n<div class=\"lightbox-next\" [hidden]=\"isHiddenNextArrow\" (click)=\"next()\"></div>",
                styles: [".lightbox-spinner,.lightbox-spinner:after,.lightbox-spinner:before{border-radius:50%;width:10px;height:10px;-webkit-animation:1.5s ease-in-out infinite lightbox-load;animation:1.5s ease-in-out infinite lightbox-load}.lightbox-spinner{color:#fff;font-size:10px;margin:0 auto 20px;position:relative;text-indent:-9999em;transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.lightbox-spinner:after,.lightbox-spinner:before{content:\"\";position:absolute;top:0}.lightbox-spinner:before{left:-32px;-webkit-animation-delay:-.32s;animation-delay:-.32s}.lightbox-spinner:after{left:32px}@-webkit-keyframes lightbox-load{0%,100%,80%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}@keyframes lightbox-load{0%,100%,80%{box-shadow:0 10px 0 -1.3em}40%{box-shadow:0 10px 0 0}}:host.lightbox-shown{opacity:1}:host.lightbox-shown .lightbox-close,:host.lightbox-shown .lightbox-next,:host.lightbox-shown .lightbox-prev{opacity:.5;transition-delay:.1s}:host.lightbox-shown .lightbox-close:hover,:host.lightbox-shown .lightbox-next:hover,:host.lightbox-shown .lightbox-prev:hover{opacity:1;transition-delay:0}:host.lightbox-shown .lightbox-counter{opacity:1}:host.lightbox-hide-controls .lightbox-close,:host.lightbox-hide-controls .lightbox-next,:host.lightbox-hide-controls .lightbox-prev{opacity:0}:host.lightbox-simple-mode .lightbox-container{cursor:zoom-out}:host:not(.lightbox-animation) .lightbox-container{display:flex;align-items:center;justify-content:center;top:0;left:0;height:100%}:host.lightbox-light{color:#000;text-shadow:none}:host{position:fixed;top:0;left:0;width:100%;height:100%;color:#fff;text-shadow:0 0 1px rgba(0,0,0,.65);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10000}:host img{opacity:1;max-width:100%;max-height:100%}:host img.lightbox-curr-image.lightbox-show{opacity:1}:host img.lightbox-curr-image{opacity:0;z-index:10}:host .lightbox-container.lightbox-hide{display:none}:host .lightbox-container{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transform-origin:top left}:host .lightbox-preloader{background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;width:100%;height:100%;position:absolute}:host .lightbox-spinner{position:absolute;top:51%;left:50%;margin-top:-15px;margin-left:-5px}:host .lightbox-preloader .lightbox-spinner{margin-top:-9px;margin-left:-3px}:host .lightbox-preloader .lightbox-spinner,:host .lightbox-preloader .lightbox-spinner:after,:host .lightbox-preloader .lightbox-spinner:before{width:6px;height:6px}:host .lightbox-preloader .lightbox-spinner:before{left:-21px}:host .lightbox-preloader .lightbox-spinner:after{left:21px}:host .lightbox-counter{text-align:left;position:absolute;left:22px;top:13px;font-size:14px;z-index:30}:host .lightbox-description{text-align:center;max-width:calc(100% - 200px);margin:0 auto;font-size:14px;line-height:43px;position:relative;z-index:50}:host .lightbox-error{color:rgba(255,255,255,.75);font-size:19px}:host .lightbox-close{position:absolute;top:0;right:0;padding:13px 22px;font-size:13px;text-transform:uppercase;cursor:pointer;opacity:.5;z-index:30;transition:opacity .1s ease-in-out}:host .lightbox-next,:host .lightbox-prev{width:100px;height:100%;position:absolute;top:0;cursor:pointer;opacity:.5;z-index:20;transition:opacity .1s ease-in-out;-webkit-tap-highlight-color:rgba(255,255,255,0)}:host .lightbox-prev{left:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAiCAYAAABbXymAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMzMTZCQzFERDgzMTExRTc5QUYxQTUxRDI5MkM5ODZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMzMTZCQzFFRDgzMTExRTc5QUYxQTUxRDI5MkM5ODZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzMxNkJDMUJEODMxMTFFNzlBRjFBNTFEMjkyQzk4NkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzMxNkJDMUNEODMxMTFFNzlBRjFBNTFEMjkyQzk4NkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7VrwZKAAAClElEQVR42qzWSY8SQRgGYLoVHPeTXlwCiIwMArJGtiABNep4IGZi4oEfMJooLjePrnFGf5yJS0hYmq2b/aBxiQ6+lRRJdaUZq5vp5E2TLnioVFd9VZLN+iUxIdeMiW2fRVCmvz2DpJBVCk6X6SVBHQRLpVKb7Xb782g0Usrl8jM8W0P20+9YQn3JZPIhwN6MXoPBoI3nG8iKGZhF14A+AqrOmKtWq31F213kkOgQ69B0Ol0BqrFot9vV/H7/c7RfEoVZ1G+EdjqdvtfrfYn2K8gJkaHQodlstjIej/ssihdH0Ddov4acQo7QlycJo5PJhEc1j8fzmqJk2h1D7Lv1lkUv5nK5xzzaarWMUIcwms/nCTrgUbfbTdCrVtAAQafTqQ5VFEVdCi0UCk/Q0yGLNptN1el0vqLoaRHUxqPoKY/2KFo0g0r0ba4Wi8WnQEcs2mg0VAPULrJsZTqpNzDZ6yxar9dVl8tFVtR10SnFohJdgnZYuh9IkjSTZfknPn5DviO/kL/IjkgtIOhhJJ7JZF5gdU24hdDG6qqg/QJywEzlmg/FSTLhE4nE9nA4nHJFRvH5fJto94gOBfvyjtJxXI/H4x+A63re6/UUVDCCnzeDz6fbceQscjsWi703wFsM7hDBJQN8PRqNbmNn0OGapu0JfoviYx4PBAL30e5dCg+Hw0Z4e8/wfr/P451QKPRgaRzIFjDdksefsbjdKn5zER6JRMiwuP+3Ne2KB4PBLVVVR1xd+YK2O2bOFYvwd8CHbK/x/J6Zc8Ui/AZmxdtqtdrAwlFLpRLZrS/PYcnkEUuiY7hCS+g5sovT55+Qj7QS/jYD8zjp/UF6t9GS+oPed8zCLC5zJ0tSo//Q+8wKLHTw/ifAAMQVS4vHZR2VAAAAAElFTkSuQmCC) center left 22px no-repeat}:host .lightbox-next{right:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAiCAYAAABbXymAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyNDE3MDE1RDgzMTExRTc5NjM4QTIzQzI2Rjc2Qjg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyNDE3MDE2RDgzMTExRTc5NjM4QTIzQzI2Rjc2Qjg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTI0MTcwMTNEODMxMTFFNzk2MzhBMjNDMjZGNzZCODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTI0MTcwMTREODMxMTFFNzk2MzhBMjNDMjZGNzZCODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zv5BKAAACl0lEQVR42rTW224SQRwGcHZb8FT1Sm88BJCiFAE5JpyCBNRE8coYEy94AGqi9XDXS0+JVh/CB/EhiFET5LjAclgWjaa1aazfJDM6u6LuLjrJl2124cd0duY/I9h+NoELabtcTLcFCon0bw+SRE4h28hn2xyNoIvISrlcfqAoSluSpLepVKqCe6cRB/2MYAXei1wfjUbSLm34gX4ymbyN+z6rOBmC/ciNer3+fpdrwGXgd8h/YwVn8Dm/37/e6/UGOnyQTqfXrOBsKI4g571e76Nutzv8De43gwv05S0hx5CLwJ/iBWrwyWQyzGazpnHyITtyCDlBcI/H8wS4ZlhUVbWMO/R4p9P5Bc/lcnfx/Ow8+AW32z0LH+Xz+X+Dt9ttmcen0ynDA1bx4wR3Op2PW62WrOv5uFAo3JsXL1K8r+v5LNxmZrb8wJvNpn5YlGKxeJ/WFruZBcRPxUsul2u90WhocCyqBqk3dLGJiwbgb/T6FflCSqkoiluCIGjqNGzWgQUz9YR8aQ9yBqtyDQtH0q1KNZPJPMTzOHKA4oaHwuPz+SooUm0eHY/H00QisUEWFHKUDYVRdBmVr9Lv9/WoGo/HX+J5iY7/QSMvj003hnb0aCwWe4HnV5GTyGEj002DDgYDDYqdRo1Goxu0p3pU+BvqDQQCqzPQCUWvzINKejQcDltHQ6HQLaBdHh0Oh5ZRO0OBaFD8iIL7z82ibGtyRyKR1T+gl82g/GZ6Dev/HY/KsqwEg0FLKL/93+R7C3QM9Nk8KDtiOWq12jb2s2XS01Kp9Kparb7G/TfIR2QT2TF6UBS42bBEi/UK/SIBPyCfkC0zKA+z6rWPXm30tLlJr6ZQ/ZmYDYnI1eEdejV9Thb+18H7uwADAOG/Wcm4x+knAAAAAElFTkSuQmCC) center right 22px no-repeat}:host .lightbox-close,:host .lightbox-counter,:host .lightbox-next,:host .lightbox-prev{opacity:0;transition:opacity 150ms cubic-bezier(.475,.105,.445,.945)}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: EventService }]; }, { hostShown: [{
            type: HostBinding,
            args: ['class.lightbox-shown']
        }], hideControls: [{
            type: HostBinding,
            args: ['class.lightbox-hide-controls']
        }], simpleMode: [{
            type: HostBinding,
            args: ['class.lightbox-simple-mode']
        }], hostLightTheme: [{
            type: HostBinding,
            args: ['class.lightbox-light']
        }], scrolling: [{
            type: HostListener,
            args: ['window:scroll']
        }], onKeyDown: [{
            type: HostListener,
            args: ['window:keydown', ['$event']]
        }], onMouseEnter: [{
            type: HostListener,
            args: ["mouseenter", ['$event']]
        }], transitionEnd: [{
            type: HostListener,
            args: ['transitionend', ['$event']]
        }], hostAnimation: [{
            type: HostBinding,
            args: ['class.lightbox-animation']
        }], hostStyleBackgroundColor: [{
            type: HostBinding,
            args: ['style.backgroundColor']
        }], prevImageElem: [{
            type: ViewChild,
            args: ['prevImageElem', { static: true }]
        }], lightboxContainerElem: [{
            type: ViewChild,
            args: ['lightboxContainer', { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CrystalLightbox, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.Injector }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LightboxDirective, [{
        type: Directive,
        args: [{
                selector: '[lightbox]'
            }]
    }], function () { return [{ type: CrystalLightbox }, { type: EventService }, { type: ɵngcc0.ElementRef }]; }, { properties: [{
            type: Input
        }], events: [{
            type: Output
        }], hostLightboxGroup: [{
            type: HostBinding,
            args: ['class.lightbox-single']
        }], hostSimpleMode: [{
            type: HostBinding,
            args: ['class.lightbox-simple-mode']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], fullImage: [{
            type: Input
        }], loop: [{
            type: Input
        }], backgroundOpacity: [{
            type: Input
        }], counter: [{
            type: Input
        }], imageMaxHeight: [{
            type: Input
        }], imageMaxWidth: [{
            type: Input
        }], animationDuration: [{
            type: Input
        }], animationMode: [{
            type: Input
        }], animationTimingFunction: [{
            type: Input
        }], closeButtonText: [{
            type: Input
        }], counterSeparator: [{
            type: Input
        }], disable: [{
            type: Input
        }], simpleMode: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], hideThumbnail: [{
            type: Input
        }], gestureEnable: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LightboxGroupDirective, [{
        type: Directive,
        args: [{
                selector: '[lightbox-group]'
            }]
    }], function () { return [{ type: EventService }, { type: CrystalLightbox }]; }, { hostLightboxGroup: [{
            type: HostBinding,
            args: ['class.lightbox-group']
        }], _lightboxDirectiveList: [{
            type: ContentChildren,
            args: [LightboxDirective, { descendants: true }]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CrystalLightboxModule, { declarations: function () { return [LightboxCommonComponent, LightboxComponent, LightboxDirective, LightboxGroupDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [LightboxDirective, LightboxGroupDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CrystalLightboxModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LightboxCommonComponent,
                    LightboxComponent,
                    LightboxDirective,
                    LightboxGroupDirective
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    LightboxDirective,
                    LightboxGroupDirective
                ],
                providers: [
                    CrystalLightbox,
                    EventService
                ],
                bootstrap: [],
                entryComponents: [
                    LightboxComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-lightbox
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CrystalLightboxModule, EventService, LightboxDirective, LightboxGroupDirective, LightboxCommonComponent as ɵa, LightboxComponent as ɵb, CrystalLightbox as ɵc };

//# sourceMappingURL=crystalui-angular-lightbox.js.map
