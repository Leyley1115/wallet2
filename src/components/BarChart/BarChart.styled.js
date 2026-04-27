import styled from "styled-components";

export const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 789px;
    padding: 24px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    font-family: "Montserrat", sans-serif;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
`;

export const Title = styled.div`
    font-size: 14px;
    color: #888;
`;

export const Total = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 4px;
`;

export const BarsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 400px;
    padding-bottom: 10px;
    gap: 32px;
`;

export const BarBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
`;

export const Bar = styled.div`
    width: 100%;
    height: ${({ $height }) => $height}%;
    background-color: ${({ $color }) => $color};
    border-radius: 12px;
    margin-bottom: 8px;
`;

export const Amount = styled.div`
    font-size: 12px;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    text-align: center;
    margin-bottom: 4px;
`;

export const Label = styled.div`
    font-size: 12px;
    text-align: center;
`;
