import { FC, memo, useCallback, useEffect, useState } from 'react';

import delay from 'lodash/delay';
import size from 'lodash/size';

import colors from '@styles/themes/v2/colors.json';

import { TourProps } from './props';
import StyledTour from './styles';

const Tour: FC<TourProps> = ({ isOpen, steps, nextButton, prevButton, onFinish, ...rest }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<number>(0);

  const sizeSteps = size(steps);

  const handleNextTo = () => {
    if (step >= 0 && step < sizeSteps - 1) setStep((prev) => prev + 1);
  };

  const handlePrevTo = () => {
    if (step > 0 && step <= sizeSteps - 1) setStep((prev) => prev - 1);
  };

  const handleEventClick = useCallback((removeEvent?: boolean) => {
    const lastButton = document.querySelector<HTMLElement>("button[data-tour-elem='right-arrow']");
    const hasEventOnClick = lastButton?.onclick ?? null;

    if (lastButton && onFinish) {
      if (removeEvent) {
        if (hasEventOnClick) {
          lastButton.onclick = null;
        }
      } else {
        lastButton.onclick = () => onFinish();
      }
    }
  }, []);

  // Case: If only a step
  useEffect(() => {
    if (sizeSteps === 1) delay(() => handleEventClick(), 1000);
  }, [sizeSteps]);

  // Case for steps
  useEffect(() => {
    // Add/Remove event click for button if condition is true
    if (step === sizeSteps - 1) {
      handleEventClick();
    } else if (step === sizeSteps - 2) {
      handleEventClick(true);
    }
  }, [step]);

  return (
    <div
      onKeyDown={({ key }) => {
        switch (key) {
          case 'ArrowRight':
          case 'd':
          case 'D':
            handleNextTo();
            break;
          case 'ArrowLeft':
          case 'a':
          case 'A':
            handlePrevTo();
            break;
          default:
            break;
        }
      }}
    >
      <StyledTour
        isOpen
        disableKeyboardNavigation
        disableDotsNavigation
        steps={steps}
        nextButton={nextButton || 'Next'}
        prevButton={prevButton || 'Previous'}
        showCloseButton={false}
        showNumber={false}
        showNavigation={sizeSteps > 1}
        nextStep={() => handleNextTo()}
        prevStep={() => handlePrevTo()}
        goToStep={step}
        rounded={16}
        accentColor={colors.primary[500]}
        {...rest}
      />
    </div>
  );
};

export default memo(Tour);
