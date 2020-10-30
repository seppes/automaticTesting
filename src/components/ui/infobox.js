import styled from "@emotion/styled";
import React, {useState} from "react";
import {Swipeable} from "react-swipeable";
import {MdNavigateBefore, MdNavigateNext} from "react-icons/md";

export const StyledOuterDiv = styled.div`
  padding: 0 3vw 0 2vw;
  padding-top: 80px;
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(23, 23, 23, .04);
  z-index: 10;
`;
const StyledInfoBox = styled.div`
    position: fixed;
    background-color: ${({theme}) => theme.colors.primaryLight};
    box-shadow: ${(props) => props.isInfoBoxOpen ? 'rgba(23, 23, 23, .4) 0 0 48px' : 'none'};
    top: 120px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: .4em;
    border-radius: 5px;
    transform: translateY(${(props) => props.isInfoBoxOpen ? "0%" : "100%"});
    transition: transform .3s ease-in-out;
    z-index: 11;
`;

const StyledInfoBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    ${(props) => (props.goingToPrevPage || props.goingToNextPage) ? `opacity: .4;` : `opacity: 1;`};
    transition: opacity .2s ease-out;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    ${({theme}) => theme.hoverDark};
`;

const StyledPrevNextButton = styled.div`
    position: absolute;
    top: 15vh;
    font-size: larger;
    cursor: pointer;
    padding: 8vh 0;
`;
const StyledPrevButton = styled(StyledPrevNextButton)`
    left: 0;
`;
const StyledNextButton = styled(StyledPrevNextButton)`
    right: 0;
`;

export function InfoBox(props) {
    const {isInfoBoxOpen, closeInfoBox, prevInfoBoxPage, nextInfoBoxPage} = props;
    const [goingToPrevPage, setGoingToPrevPage] = useState(false);
    const [goingToNextPage, setGoingToNextPage] = useState(false);

    function prevPageWithTransition() {
        setGoingToPrevPage(true);
    }

    function nextPageWithTransition() {
        setGoingToNextPage(true);
    }

    function pageTransitionEnded() {
        if (goingToPrevPage) {
            prevInfoBoxPage();
            setGoingToPrevPage(false);
        }
        if (goingToNextPage) {
            nextInfoBoxPage();
            setGoingToNextPage(false);
        }
    }

    return <div>
        {isInfoBoxOpen && <StyledOverlay onClick={closeInfoBox}/>}
        {<StyledInfoBox isInfoBoxOpen={isInfoBoxOpen}>
            <Swipeable
                style={{display: 'flex', flex: 1, height: '100%'}}
                onSwipedRight={prevPageWithTransition}
                onSwipedLeft={nextPageWithTransition} preventDefaultTouchmoveEvent={true} >
                <StyledInfoBoxContent goingToPrevPage={goingToPrevPage}
                                      goingToNextPage={goingToNextPage}
                                      onTransitionEnd={() => pageTransitionEnded()}>
                    {props.children}
                    <CloseButton onClick={closeInfoBox}>x</CloseButton>
                    <StyledPrevButton onClick={prevPageWithTransition}><MdNavigateBefore/></StyledPrevButton>
                    <StyledNextButton
                        onClick={nextPageWithTransition}><MdNavigateNext/></StyledNextButton>
                </StyledInfoBoxContent>
            </Swipeable>
        </StyledInfoBox>
        }
    </div>;
}