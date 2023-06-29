import { memo, useMemo, useState } from 'react';

import size from 'lodash/size';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '@components/Box';
import IconButton from '@components/IconButton';
import MenuItem from '@components/Menu/MenuItem';
import MenuList from '@components/Menu/MenuList';
import Popover from '@components/Popover';
import Typography from '@components/Typography';

import { ReactComponent as LessonIcon } from 'assets/images/icn_lesson.svg';

import { ReactComponent as AssignmentIcon } from '../../../assets/images/icn_assignment.svg';
import { ReactComponent as QuizIcon } from '../../../assets/images/icn_quiz.svg';
import { ACTIVITIES, PlanTaskStatus, Status } from '../constants';
import { useGlobalContext } from '../GlobalContext';
import { CardProps } from '../props';
import {
  BodyMedium,
  CardInfo,
  ContentTop,
  FlexBox,
  Icon,
  OverallTotal,
  StatusTag,
  TextEndBox,
  TitleSmall,
  checkIconColor,
  TitleSmallTruncate,
} from '../styles';
import TooltipDynamic from '@components/TooltipDynamic';

export default memo((props: CardProps) => {
  const { labelMapping, onClickCard, onClickSchedule, onClickMenu, customCardFooter, isSchoolPlan } =
    useGlobalContext();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const {
    type,
    title,
    subTitle,
    divider = true,
    isHiddenFooter,
    menuList,
    estimateTime,
    scheduleFooter,
    overall,
    hiddenContentRight,
    status,
    isStudyHall = false,
    planTaskStatus,
  } = props || {};

  const planCheckDoneCondition = (() =>
    isSchoolPlan && !isStudyHall && PlanTaskStatus[planTaskStatus || 0] === PlanTaskStatus[1])();

  const renderIcon = (type: number | undefined) => {
    switch (type) {
      case ACTIVITIES.TEST: // EL-6178
      case ACTIVITIES.ASSIGNMENT:
        return <AssignmentIcon />;
      case ACTIVITIES.TEST_IN_CLASS:
        return <QuizIcon />;
      case ACTIVITIES.LESSON:
        return <LessonIcon />;
      default:
        return <AssignmentIcon />;
    }
  };

  const renderMenuList = useMemo(() => {
    if (!anchorEl) return null;
    const handleCloseMenuList = () => setAnchorEl(null);

    return (
      <Popover
        keepMounted
        open
        elevation={10}
        anchorEl={anchorEl}
        onClose={handleCloseMenuList}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuList>
          {menuList?.map(({ label, disabled, sx }) => (
            <MenuItem
              disableRipple
              disabled={disabled}
              sx={sx}
              onClick={() => {
                onClickMenu && onClickMenu(props);
                handleCloseMenuList();
              }}
            >
              <Typography variant='bodyLarge'>{label}</Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    );
  }, [menuList, anchorEl]);

  const renderContentByType = useMemo(() => {
    if (isSchoolPlan) return;
    if (size(overall) && !size(estimateTime))
      return (
        <TextEndBox>
          {overall?.onlyShowStatus ? (
            <TitleSmall disabled={overall?.disabled ?? false}>{overall?.status ?? ''}</TitleSmall>
          ) : (
            <>
              <Typography component='span' variant='titleSmall'>
                {overall?.value ?? '--'}
              </Typography>
              <OverallTotal>/{overall?.totalPoint ?? 100}</OverallTotal>
              <BodyMedium disabled>{overall?.status ?? ''}</BodyMedium>
            </>
          )}
        </TextEndBox>
      );

    return (
      <TextEndBox>
        <TitleSmall alert={estimateTime?.isAlert ? 1 : 0}>{estimateTime?.dateTime ?? ''}</TitleSmall>
        <BodyMedium disabled>{estimateTime?.estimate ?? ''}</BodyMedium>
      </TextEndBox>
    );
  }, [overall, estimateTime]);

  return (
    <>
      {renderMenuList}
      <CardInfo onClick={() => onClickCard && onClickCard(props)}>
        <ContentTop>
          <Icon>{renderIcon(type)}</Icon>
          <Box ml={2} sx={{ maxWidth: hiddenContentRight ? '75%' : '50%', textAlign: 'start' }}>
            {!!title && (
              <TooltipDynamic title={title}>
                <TitleSmallTruncate>{title}</TitleSmallTruncate>
              </TooltipDynamic>
            )}
            {!!subTitle && <BodyMedium disabled>{subTitle}</BodyMedium>}
            {isSchoolPlan && (
              <TitleSmall alert={estimateTime?.isAlert ? 1 : 0}>{estimateTime?.dateTime ?? ''}</TitleSmall>
            )}
          </Box>
          {status && <StatusTag status={status}>{labelMapping?.[status] ?? Status[status]} </StatusTag>}

          {!hiddenContentRight && (
            <FlexBox className='last-item'>
              {planCheckDoneCondition && <CheckCircleIcon fontSize='small' sx={{ color: checkIconColor }} />}
              {renderContentByType}
              {!!size(menuList) && (
                <IconButton
                  sx={{ ml: 2.5 }}
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.stopPropagation();
                    setAnchorEl(e.currentTarget);
                  }}
                >
                  <MoreVertIcon fontSize='small' />
                </IconButton>
              )}
            </FlexBox>
          )}
        </ContentTop>
        {/* {!isHiddenFooter && (
          <>
            {divider && <Divider />}
            <ContentBottom>
              {customCardFooter ? (
                customCardFooter(props)
              ) : (
                <>
                  <GroupCalendar disabled={scheduleFooter?.disabled ?? false}>
                    <CalendarIcon />
                    <BodyMedium>{scheduleFooter?.count ?? 0}</BodyMedium>
                  </GroupCalendar>
                  <BodyMedium noWrap maxWidth='70%' disabled={scheduleFooter?.disabled ?? false}>
                    {scheduleFooter?.label ?? ''}
                  </BodyMedium>
                  <Button
                    className='last-item'
                    variant='outlined'
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickSchedule && onClickSchedule(props);
                    }}
                  >
                    {labelMapping?.buttonSchedule ?? 'Schedule'}
                  </Button>
                </>
              )}
            </ContentBottom>
          </>
        )} */}
      </CardInfo>
    </>
  );
});
